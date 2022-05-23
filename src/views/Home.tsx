import { SimpleDialog } from '@/components/SimpleDialog';
import { useHome } from '@/hooks/useHome';
import { Box, Button, Typography } from '@mui/material';

export function Home() {
  const { startQuiz, isErrorDialogOpened } = useHome();

  return (
    <>
      <Box
        sx={{
          mt: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">Trivia Quiz</Typography>

        <Button onClick={startQuiz}>시작하기</Button>
      </Box>

      <SimpleDialog
        open={isErrorDialogOpened}
        title="API 요청 실패"
        content="잠시 후에 다시 시도해주세요."
      />
    </>
  );
}
