import os
import pandas as pd
from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient

def _login_storage_account():
    
    credential = DefaultAzureCredential()
    
    # Retrieve the storage blob service URL, which is of the form
    # https://<your-storage-account-name>.blob.core.windows.net/
    storage_account_name = os.environ["STORAGE_ACCOUNT_NAME"]
    account_key = os.environ["STORAGE_ACCOUNT_KEY"]
    connection_string = f"DefaultEndpointsProtocol=https;AccountName={storage_account_name};AccountKey={account_key};EndpointSuffix=core.windows.net"
    
    blob_service_client = BlobServiceClient.from_connection_string(connection_string)
    return blob_service_client

def return_athletes(): 
    container_name = "loginappstorage"
    blob_name = "web_app.csv"
    blob_service_client = _login_storage_account()
    container_client = blob_service_client.get_container_client(container_name)
    blob_client = container_client.get_blob_client(blob_name)

    if os.environ['ENVIRONMENT'] == 'local':
        athlete_df = pd.read_csv('./data/web_app.csv')
    else: 
        athlete_df = pd.read_csv(blob_client.download_blob())
    return athlete_df

def write_athletes(athlete_df):
    container_name = "loginappstorage"
    blob_name = "web_app.csv"
    blob_service_client = _login_storage_account()
    blob_client = blob_service_client.get_blob_client(container=container_name, 
                                                      blob=blob_name)
    
    
    if os.environ['ENVIRONMENT'] == 'local':
        athlete_df = athlete_df.to_csv('./data/web_app.csv')
    else:
        csv_data = athlete_df.to_csv(index=False) #, encoding='utf-8')
        blob_client.upload_blob(csv_data, overwrite=True)
