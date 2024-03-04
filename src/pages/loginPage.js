import { Grid, TextField, Typography, Button } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function LoginUser() {
    const [athleteName, setAthleteName] = useState("Please type in your athlete id.");

    function ValidateAthlete() {
        setAthleteName("Eli");
    }
    return (
        <>
            <Grid item>
            <TextField label="Athlete ID" required></TextField>
            </Grid>
            <Grid item>
            <Button onClick={ValidateAthlete}>Login</Button>
            </Grid>
        </>
    )
}

function LoginUserButton() {
    const [athleteName, setAthleteName] = useState("Please type in your athlete id.");

    function handleClick() {
        setAthleteName("Eli");
    }

    return (
    <button onClick={handleClick}>
        {athleteName}
    </button>
        
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
            <TextField label="Athlete ID" required></TextField>
            </Grid>
            <Grid item>
            <LoginUserButton />
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