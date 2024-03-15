import azure.functions as func
import logging
import json
from api.helper.storageAccount import login_storage_account

def get_athlete(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    login_storage_account()    
    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if name:
        return func.HttpResponse(json.dumps({"isAuthenticated":True}), status_code=200)
    else:
        return func.HttpResponse(
             json.dumps({"isAuthenticated":True}),
             status_code=200
        )