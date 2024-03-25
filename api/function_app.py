import azure.functions as func
import json
import logging
import pandas as pd

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

@app.route(route="forgotid", auth_level=func.AuthLevel.FUNCTION)
def forgotid(req: func.HttpRequest) -> func.HttpResponse:
    athlete_id = None
    
    try:
            req_body = req.get_json()
    except ValueError:
        pass
    else:
        athlete_first_name = req_body.get('first_name')
        athlete_last_name = req_body.get('last_name')
        guardian_first_name = req_body.get('guardian_first_name')
        guardian_last_name = req_body.get('guardian_last_name')
        if guardian_first_name == "" or guardian_first_name is None: 
            guardian_first_name = athlete_first_name
        if guardian_last_name == "" or guardian_last_name is None: 
            guardian_last_name = athlete_last_name
        email = req_body.get('email')
    
    athletes_df = return_athletes()
    athletes = athletes_df[(athletes_df['FirstName'] == athlete_first_name) & 
                           (athletes_df['LastName'] == athlete_last_name) & 
                           (athletes_df['AccountFirstName'] == guardian_first_name) & 
                           (athletes_df['AccountLastName'] == guardian_last_name)
                           ]

    if len(athletes) == 1:
        athlete_id = list(athletes['UserId'])[0]
            
    if athlete_id:
        return func.HttpResponse(json.dumps({"contains_email":False,
                                                     "athlete_id": athlete_id}), 
                                         status_code=200)
    else:
        return func.HttpResponse(
             "Please insert a valid first name",
             status_code=200
        )

@app.route(route="newathlete", auth_level=func.AuthLevel.FUNCTION)
def newathlete(req: func.HttpRequest) -> func.HttpResponse:
    athlete_id = None
    
    try:
            req_body = req.get_json()
    except ValueError:
        pass
    else:
        athlete_first_name = req_body.get('first_name')
        athlete_last_name = req_body.get('last_name')
        guardian_first_name = req_body.get('guardian_first_name')
        guardian_last_name = req_body.get('guardian_last_name')
        if guardian_first_name == "" or guardian_first_name is None: 
            guardian_first_name = athlete_first_name
        if guardian_last_name == "" or guardian_last_name is None: 
            guardian_last_name = athlete_last_name
        email = req_body.get('email')

    athletes_df = return_athletes()
    
    athletes = athletes_df[(athletes_df['FirstName'] == athlete_first_name) & 
                           (athletes_df['LastName'] == athlete_last_name) & 
                           (athletes_df['AccountFirstName'] == guardian_first_name) & 
                           (athletes_df['AccountLastName'] == guardian_last_name)
                           ]
    if len(athletes) > 0: 
        logging.info("Athlete already exists.")
        new_athlete_id = list(athletes['UserId'])[0]
    else:
        logging.info("New Athlete.")
        max_athlete_id = athletes_df['UserId'].max()
        new_athlete_id = max_athlete_id + 1
        
        new_athlete_df = pd.DataFrame([["",
                                            "",
                                            "",
                                            guardian_first_name,
                                            guardian_last_name,
                                            athlete_first_name,
                                            athlete_last_name,
                                            str(new_athlete_id)
                                        ]], columns=athletes_df.columns)
        final_df = pd.concat([new_athlete_df, 
                              athletes_df], ignore_index= True)
        final_df.to_csv("./data/web_app.csv", index=False)
        
    return func.HttpResponse(json.dumps({"athlete_id": str(new_athlete_id),
                                                "athlete_name": athlete_first_name}), 
                                         status_code=200)