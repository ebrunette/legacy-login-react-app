import { Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'



export const ForgotIds = () => {
    const navigate = useNavigate()
    const [athleteFirstName, setAthleteFirstName] = useState("");
    const [athleteLastName, setAthleteLastName] = useState("");
    const [guardianFirstName, setGuardianFirstName] = useState("");
    const [guardianLastName, setGuardianLastName] = useState("");
    const [email, setEmail] = useState("");

    const routeChangeLoginPage = () => {
        let path = "/login";
        navigate(path)
    }

    function FirstName () {
        function handleFirstNameInput(e) {
            setAthleteFirstName(e.target.value)
        }
        return (
            <>
            <Grid item>
                First Name: 
            </Grid>
            <Grid item> 
                <TextField label="First Name" required onChange={handleFirstNameInput}></TextField>
            </Grid>
            </>
        )
    }
    
    function LastName () {
        function handleLastNameInput(e) {
            setAthleteLastName(e.target.value)
        }
        return (
            <>
            <Grid item>
                Last Name: 
            </Grid>
            <Grid item> 
                <TextField label="Last Name" required onChange={handleLastNameInput}></TextField>
            </Grid>
            </>
        )
    }
    
    function GuardianFirstName () {
        function handleGuardianFirstNameInput(e) {
            setGuardianFirstName(e.target.value)
        }
        return (
            <>
            <Grid item>
                Guardian First Name: 
            </Grid>
            <Grid item> 
                <TextField label="Guardian First Name" onChange={handleGuardianFirstNameInput} ></TextField>
            </Grid>
            </>
        )
    }
    
    function GuardianLastName () {
        function handleGuardianLastNameInput(e) {
            setGuardianLastName(e.target.value)
        }
        return (
            <>
            <Grid item>
                First Name Test: 
            </Grid>
            <Grid item> 
                <TextField label="Guardian Last Name" onChange={handleGuardianLastNameInput}></TextField>
            </Grid>
            </>
        )
    }
    
    function Email () {
        function handleEmailInput(e) {
            setEmail(e.target.value)
        }
        return (
            <>
                <Grid item>
                    Email: 
                </Grid>
                <Grid item> 
                    <TextField label="Email" onChange={handleEmailInput}></TextField>
                </Grid>    
            </>
        )
    }
    
    function SubmitButton () {
        async function onClick() {
            fetch("https://westuslbfuncapp.azurewebsites.net/api/forgotid", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-function-key': 'ZKZq2yGl4OkpjpCjMH-zOabSGWi9hYgS_zm8BkHrULYVAzFu8_QmRg==',
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
            })
        }
    
        return (
            <>
            <Grid item> 
                <Button onClick={onClick}>Submit</Button>
            </Grid>
            </>
        )
    }

    return <Grid container sx={{
        justifyContent: "center"
        }}>
    <Grid item >
        <Typography variant="h3">Please fill in the information to find your athlete id</Typography>
    </Grid>
    <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
        justifyContent: "center",
        paddingTop: "1rem",
        alignItems: "center"
    }}>
        <FirstName/>
    </Grid>
    <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
        justifyContent: "center",
        paddingTop: "1rem",
        alignItems: "center"
    }}>
        <LastName/>
    </Grid>
    <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
        justifyContent: "center",
        paddingTop: "1rem",
        alignItems: "center"
    }}>
        <GuardianFirstName />
    </Grid>
    <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
        justifyContent: "center",
        paddingTop: "1rem",
        alignItems: "center"
    }}>
        <GuardianLastName />
    </Grid>
    <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
        justifyContent: "center",
        paddingTop: "1rem",
        alignItems: "center"
    }}>
        <Email />
    </Grid>
    <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
        justifyContent: "center",
        paddingTop: "1rem",
        alignItems: "center"
    }}>
        <SubmitButton />
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