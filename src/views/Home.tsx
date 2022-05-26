import { SimpleDialog } from '@/components/SimpleDialog';
import { useHome } from '@/hooks/useHome';
import { Button, Grid, Typography } from '@mui/material';

export function Home() {
  const { startQuiz, isErrorDialogOpened } = useHome();

  return (
    <>
      <Grid container direction="column" justifyContent="center" alignItems="center" height="100%">
        <Typography variant="h4">Trivia Quiz</Typography>
        <Button id="startQuiz" onClick={startQuiz}>
          시작하기
        </Button>
      </Grid>

      <SimpleDialog
        open={isErrorDialogOpened}
        title="API 요청 실패"
        content="잠시 후에 다시 시도해주세요."
      />
    </>
  );
}
