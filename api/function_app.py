import azure.functions as func
import json
import logging
from helper.storageAccount import return_athletes

app = func.FunctionApp()

@app.route(route="login", auth_level=func.AuthLevel.FUNCTION)
def login(req: func.HttpRequest) -> func.HttpResponse:
        logging.info('Python HTTP trigger function processed a request.')


        if not name:
                try:
                        req_body = req.get_json()
                except ValueError:
                        pass
                else:
                        name = req_body.get('name')

        athletes_df = return_athletes()

        if name:
                return func.HttpResponse(json.dumps({"isAuthenticated":True}), status_code=200)
        else:
                return func.HttpResponse(
                json.dumps({"isAuthenticated":True}),
                status_code=200
                )