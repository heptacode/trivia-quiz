import { RenderHTML } from '@/components/RenderHTML';
import { useQuiz } from '@/hooks/useQuiz';
import { Choice } from '@/types';
import { Check, KeyboardArrowRight } from '@mui/icons-material';
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grid,
  MobileStepper,
  Radio,
  RadioGroup,
  Snackbar,
} from '@mui/material';

export function Quiz() {
  const {
    quiz,
    quizIndex,
    quizLength,
    choiceValue,
    setChoiceValue,
    submit,
    isCorrectSnackbarOpen,
    isIncorrectSnackbarOpen,
    closeSnackbar,
  } = useQuiz();

  return (
    <>
      <Grid container direction="column" justifyContent="center" alignItems="center" height="100%">
        <Card>
          <CardHeader title={<RenderHTML html={quiz?.question} />} />
          <CardContent>
            <RadioGroup
              name="radio-buttons-group"
              onChange={event => setChoiceValue(event.target.value)}
            >
              {quiz?.choices?.map((choice: Choice, index: number) => {
                return (
                  <FormControlLabel
                    key={index}
                    control={<Radio />}
                    value={choice.value}
                    label={<RenderHTML html={choice.value} />}
                  />
                );
              })}
            </RadioGroup>
          </CardContent>
          <MobileStepper
            steps={quizLength}
            position="static"
            activeStep={quizIndex}
            backButton={<></>}
            nextButton={
              <Button size="small" onClick={submit} disabled={!choiceValue}>
                {quizIndex < quizLength - 1 ? (
                  <>
                    다음 문항 <KeyboardArrowRight />
                  </>
                ) : (
                  <>
                    제출 <Check />
                  </>
                )}
              </Button>
            }
          />
        </Card>
      </Grid>

      <Snackbar
        open={isCorrectSnackbarOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={4000}
        onClose={closeSnackbar}
      >
        <Alert onClose={closeSnackbar} severity="success" sx={{ width: '100%' }}>
          맞았습니다!!
        </Alert>
      </Snackbar>
      <Snackbar
        open={isIncorrectSnackbarOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={4000}
        onClose={closeSnackbar}
      >
        <Alert onClose={closeSnackbar} severity="error" sx={{ width: '100%' }}>
          틀렸습니다
        </Alert>
      </Snackbar>
    </>
  );
}
