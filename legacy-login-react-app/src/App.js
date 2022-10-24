import { Grid, TextField, Typography, Button } from '@mui/material'; 

export const App = () => (
  <Grid container sx={{
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
        <Button>Login</Button>
      </Grid>
    </Grid>
    <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
      justifyContent: "center",
      paddingTop: "1rem",
      alignItems: "center"
    }}>
      <Grid item>
        <Button>Forgot ID</Button>
      </Grid>
    </Grid>
    <Grid container item xs={12} columnSpacing={3} rowSpacing={3} sx={{
      justifyContent: "center",
      paddingTop: "1rem",
      alignItems: "center"
    }}>
      <Grid item>
        <Button>New Athlete</Button>
      </Grid>
    </Grid>
  </Grid>
);
