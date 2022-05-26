import { CircularProgress, Grid } from '@mui/material';

export function Loading() {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" height="100%">
      <CircularProgress />
    </Grid>
  );
}
