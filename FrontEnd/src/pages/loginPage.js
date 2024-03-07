import { Grid, TextField, Typography, Button } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function Login () {
    const [visibleAthleteName, setVisibleAthleteName] = useState("");
    const [athleteName, setAthleteName] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [athleteError, setAthleteError] = useState('');

    async function onButtonClick (){
        setAthleteError('')


        if ('' === athleteName) {
            setAthleteError('Please enter an athlete id.')
            return
        }

       fetch("https://westuslbfuncapp.azurewebsites.net/api/get_athlete", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-functions-key": "ZKZq2yGl4OkpjpCjMH-zOabSGWi9hYgS_zm8BkHrULYVAzFu8_QmRg==",
              },
            body: JSON.stringify({title: 'React POST Request'})

            }
            )
            .then((response) => response.json())
            .then((data) => {
            setIsAuthenticated(data.isAuthenticated);
            })
            .catch((error) => console.log(error));

        
        setVisibleAthleteName(athleteName)
    }

    function handleAthleteInput(e) {
        setAthleteName(e.target.value)
    }
    return (
        <>
        <Grid item>
            <TextField label="Athlete ID" onChange={handleAthleteInput}></TextField>
            <Button onClick={onButtonClick}>Login</Button>
            <div>{isAuthenticated ? <div>{visibleAthleteName} has been logged in!</div>:<>{athleteError}</>} </div>
        </Grid>
        </>
    )
}

export const LoginPage = () => {
    
    const navigate = useNavigate()
    const routeChangeForgotId = () => {
        let path = "/forgotId";
        navigate(path)
    }
    const routeChangeNewAthlete = () => {
        let path = "/newAthlete";
        navigate(path)
    }
    return <Grid container sx={{
        justifyContent: "center"
        }}>
        <Grid item>
            <Typography variant="h1">
            Welcome to Legacy Boxing!
            </Typography>
        </Grid>
        <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
            justifyContent: "center",
            paddingTop: "1rem",
            alignItems: "center"
        }}>
            <Grid item>
            <Login />
            </Grid>
        </Grid>
        <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
            justifyContent: "center",
            paddingTop: "1rem",
            alignItems: "center"
        }}>
            <Grid item>
            <Button onClick={ () => routeChangeForgotId() }>Forgot ID</Button>
            </Grid>
        </Grid>
        <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
            justifyContent: "center",
            paddingTop: "1rem",
            alignItems: "center"
        }}>
            <Grid item>
            <Button onClick={ () => routeChangeNewAthlete() }>New Athlete</Button>
            </Grid>
        </Grid>
    </Grid>  
}