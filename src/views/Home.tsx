import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
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

      <Button onClick={() => navigate('/quiz')}>시작하기</Button>
    </Box>
  );
}
