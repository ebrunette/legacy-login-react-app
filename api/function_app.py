import azure.functions as func
import json
import logging

from helper.storageAccount import return_athletes

app = func.FunctionApp()
@app.route(route="login", auth_level=func.AuthLevel.ANONYMOUS)
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
        athletes = athletes_df[athletes_df['UserId'] == athlete_id]
        if len(athletes) == 1:
            isValidated = True
            first_name = list(athletes['FirstName'])[0]
            last_name = list(athletes['LastName'])[0]

        if isValidated:
                return func.HttpResponse(json.dumps({"isAuthenticated":True,
                                                     "athlete_id": athlete_id,
                                                     "athlete_first_name": first_name, 
                                                     "athlete_last_name": last_name}), 
                                         status_code=200)
        else:
                return func.HttpResponse(
                json.dumps({"isAuthenticated":False}),
                status_code=200
                )