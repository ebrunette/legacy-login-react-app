import os
import logging
import pandas as pd
from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient

def login_storage_account():
    
    credential = DefaultAzureCredential()
    
    # Retrieve the storage blob service URL, which is of the form
    # https://<your-storage-account-name>.blob.core.windows.net/
    storage_account_name = os.environ["STORAGE_ACCOUNT_NAME"]
    account_key = os.environ["STORAGE_ACCOUNT_KEY"]
    connection_string = f"DefaultEndpointsProtocol=https;AccountName={storage_account_name};AccountKey={account_key};EndpointSuffix=core.windows.net"
    
    container_name = "loginappstorage"
    blob_name = "web_app.csv"
    
    blob_service_client = BlobServiceClient.from_connection_string(connection_string)
    container_client = blob_service_client.get_container_client(container_name)
    blob_client = container_client.get_blob_client(blob_name)

    # load to RAM, eg. jupyter notebook
    athlete_df = pd.read_csv(blob_client.download_blob())
    logging.info(athlete_df.head())