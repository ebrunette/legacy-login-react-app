import { Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const NewAthlete = () => {
    const navigate = useNavigate()
    const routeChangeLoginPage = () => {
        let path = "/login";
        navigate(path)
    }
    const [athleteFirstName, setAthleteFirstName] = useState("");
    const [athleteLastName, setAthleteLastName] = useState("");
    const [guardianFirstName, setGuardianFirstName] = useState("");
    const [guardianLastName, setGuardianLastName] = useState("");
    const [email, setEmail] = useState("");
    const [athleteId, setAthleteId] = useState("")

    function handleFirstNameInput(e) {
        setAthleteFirstName(e.target.value)
    }

    function handleLastNameInput(e) {
        setAthleteLastName(e.target.value)
    }
    
    function handleGuardianFirstNameInput(e) {
        setGuardianFirstName(e.target.value)
    }

    function handleGuardianLastNameInput(e) {
        setGuardianLastName(e.target.value)
    }
    
    function handleEmailInput(e) {
        setEmail(e.target.value)
    }

    function SubmitButton () {
        async function onClick() {
            fetch("https://westuslbfuncapp.azurewebsites.net/api/newathlete?", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-functions-key': 'D-JVJFEdZ6qmqIwTeavnJaUgM5Ku3PpaU0gASxQ0AE8lAzFuOX5rYQ==',
            },
            body: JSON.stringify({
                "first_name":athleteFirstName,
                "last_name":athleteLastName,
                "guardian_first_name":guardianFirstName,
                "guardian_last_name":guardianLastName,
                "email":email
            })
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAthleteId(data.athlete_id);
            })
        }
    
        return (
            <>
            <Grid item alignItems={"center"}> 
                <Button onClick={onClick}>Submit</Button>
            </Grid>
            
            </>
        )
    }

    return <Grid container sx={{
        justifyContent: "center"
        }}>
        <Grid item >
            <Typography variant="h3">Thank you and welcome the Legacy Boxing Gym!</Typography>
        </Grid>
        <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
            justifyContent: "center",
            paddingTop: "1rem",
            alignItems: "center"
        }}>
            <Grid item>
                 First Name
            </Grid>
            <Grid item> 
                <TextField label="First Name" required onChange={handleFirstNameInput}></TextField>
            </Grid>
        </Grid>
        <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
            justifyContent: "center",
            paddingTop: "1rem",
            alignItems: "center"
        }}>
            <Grid item>
                 Last Name
            </Grid>
            <Grid item> 
                <TextField label="Last Name" required onChange={handleLastNameInput}></TextField>
            </Grid>
        </Grid>
        <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
            justifyContent: "center",
            paddingTop: "1rem",
            alignItems: "center"
        }}>
            <Grid item>
                 Guardian First Name
            </Grid>
            <Grid item> 
                <TextField label="Guardian First Name" onChange={handleGuardianFirstNameInput}></TextField>
            </Grid>
        </Grid>
        <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
            justifyContent: "center",
            paddingTop: "1rem",
            alignItems: "center"
        }}>
            <Grid item>
                 Guardian Last Name
            </Grid>
            <Grid item> 
                <TextField label="Guardian Last Name" required onChange={handleGuardianLastNameInput}></TextField>
            </Grid>
        </Grid>
        <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
            justifyContent: "center",
            paddingTop: "1rem",
            alignItems: "center"
        }}>
            <Grid item>
                 Email Address
            </Grid>
            <Grid item > 
                <TextField label="Email Address" required onChange={handleEmailInput}></TextField>
            </Grid>
        </Grid>
        <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
            justifyContent: "center",
            paddingTop: "1rem",
            alignItems: "center"
        }}>
            <Grid item> 
                <Button>Submit</Button>
            </Grid>
        </Grid>
        <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
            justifyContent: "center",
            paddingTop: "1rem",
            alignItems: "center"
        }}>
            <Grid item> 
                <Button onClick={ () => routeChangeLoginPage() }>Back To Login Page</Button>
            </Grid>
        </Grid>
        
    </Grid>
}