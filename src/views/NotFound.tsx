import { Grid, Typography } from '@mui/material';

export function NotFound() {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Typography variant="h4" align="center">
        404 Not Found
      </Typography>

      <img src="/undraw_not_found_-60-pq.svg" alt="Not Found" loading="lazy" width="160px" />
    </Grid>
  );
}
