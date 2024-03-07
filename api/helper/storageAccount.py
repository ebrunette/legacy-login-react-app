import os
import logging

def login_storage_account():
    blob_connection_string = os.environ["AZURE_BLOB_STORAGE_CONNECTION_STRING"]
    logging.info(blob_connection_string)