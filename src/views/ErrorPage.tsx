import { Grid, Typography } from '@mui/material';

export function ErrorPage() {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" height="100%">
      <Typography variant="h5" align="center">
        문제가 발생했어요 :&#40;
      </Typography>

      <img src="/undraw_not_found_-60-pq.svg" alt="Not Found" loading="lazy" width="160px" />
    </Grid>
  );
}
