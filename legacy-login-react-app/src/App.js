import { Grid, TextField, Typography } from '@mui/material';

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
      justifyContent: "center"
    }}>
      <Grid item>
        <TextField label="First Name" required></TextField>
      </Grid>
      <Grid item>
        <TextField >Last Name</TextField>
      </Grid>
      <Grid item>
        <TextField>First Name</TextField>
      </Grid>
      <Grid item>
        <TextField>First Name</TextField>
      </Grid>
    </Grid>
  </Grid>
);
