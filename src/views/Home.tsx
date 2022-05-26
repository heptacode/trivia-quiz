import { useHome } from '@/hooks/useHome';
import { Button, Grid, Typography } from '@mui/material';

export default function Home() {
  const { startQuiz } = useHome();

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" height="100%">
      <Typography variant="h4">Trivia Quiz</Typography>
      <Button id="startQuiz" onClick={startQuiz}>
        시작하기
      </Button>
    </Grid>
  );
}
