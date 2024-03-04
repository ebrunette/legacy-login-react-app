import { Grid, TextField, Typography, Button, Input } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function Login () {
    const [visibleAthleteName, setVisibleAthleteName] = useState("");
    const [athleteName, setAthleteName] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [athleteError, setAthleteError] = useState('');

    function onButtonClick (){
        setAthleteError('')


        if ('' == athleteName) {
            setAthleteError('Please enter a athlete id.')
            return
        }
        setIsAuthenticated(true)
        setVisibleAthleteName(athleteName)

        // authentication call will be made here.
    }

    function handleAthleteInput(e) {
        setAthleteName(e.target.value)
    }
    return (
        <>
        <Grid item>
            <TextField label="Athlete ID" onChange={handleAthleteInput}></TextField>
            <Button onClick={onButtonClick}>Login</Button>
            <div>{isAuthenticated ? <div>{visibleAthleteName} has been logged in!</div>:<></>} </div>
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
            {/* <Grid item>
            <TextField label="Athlete ID" required></TextField>
            </Grid> */}
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