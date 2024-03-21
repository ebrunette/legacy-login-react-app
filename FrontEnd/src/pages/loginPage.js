import { Grid, TextField, Typography, Button } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function Login () {
    const [visibleAthleteName, setVisibleAthleteName] = useState("");
    const [athleteId, setAthleteId] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [athleteError, setAthleteError] = useState('');

    async function onButtonClick (){
        setAthleteError('')
        if ('' === athleteId) {
            setAthleteError('Please enter an athlete id.')
            return
        }
        
       fetch("https://westuslbfuncapp.azurewebsites.net/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-functions-key": "D-JVJFEdZ6qmqIwTeavnJaUgM5Ku3PpaU0gASxQ0AE8lAzFuOX5rYQ==",
              },
            body: JSON.stringify({"athlete_id": Number(athleteId)})
            }
            )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setIsAuthenticated(data.isAuthenticated);
                setVisibleAthleteName(data.athlete_first_name)
            })
            .catch((error) => console.log(error));        
    }

    function handleAthleteInput(e) {
        setAthleteId(e.target.value)
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