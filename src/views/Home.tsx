import { useHome } from '@/hooks/useHome';
import { Box, Button, Typography } from '@mui/material';

export function Home() {
  const { startQuiz } = useHome();

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h4">
        Trivia Quiz
      </Typography>

      <Button onClick={startQuiz}>시작하기</Button>
    </Box>
  );
}
