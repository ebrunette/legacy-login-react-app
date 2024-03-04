import { Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NewAthlete = () => {
    const navigate = useNavigate()
    const routeChangeLoginPage = () => {
        let path = "/login";
        navigate(path)
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
                <TextField label="First Name" required></TextField>
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
                <TextField label="Last Name" required></TextField>
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
                <TextField label="Guardian First Name"></TextField>
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
                <TextField label="Guardian Last Name" required></TextField>
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
                <TextField label="Email Address" required></TextField>
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