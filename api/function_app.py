import azure.functions as func
import json
import logging
from helper.storageAccount import return_athletes

app = func.FunctionApp()

@app.route(route="login", auth_level=func.AuthLevel.FUNCTION)
def login(req: func.HttpRequest) -> func.HttpResponse:
        isValidated = False
        athlete_id = None
        
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            athlete_id = req_body.get('athlete_id')
        logging.info(athlete_id)
        
        athletes_df = return_athletes()
        
        if len(athletes_df[athletes_df['UserId'] == athlete_id]) == 1:
                isValidated = True

        if isValidated:
                return func.HttpResponse(json.dumps({"isAuthenticated":True}), status_code=200)
        else:
                return func.HttpResponse(
                json.dumps({"isAuthenticated":False}),
                status_code=200
                )