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
  MobileStepper,
  Radio,
  RadioGroup,
  Snackbar,
} from '@mui/material';

export function Quiz() {
  const {
    quizIndex,
    quizLength,
    question,
    choice,
    setChoice,
    choices,
    submit,
    isCorrectSnackbarOpen,
    isIncorrectSnackbarOpen,
    closeSnackbar,
  } = useQuiz();

  return (
    <>
      <Card sx={{ mt: 10 }}>
        <CardHeader title={<div dangerouslySetInnerHTML={{ __html: question }}></div>} />
        <CardContent>
          <RadioGroup name="radio-buttons-group" onChange={event => setChoice(event.target.value)}>
            {choices.map((choice: Choice, index: number) => {
              return (
                <FormControlLabel
                  key={index}
                  control={<Radio />}
                  value={choice.value}
                  label={<div dangerouslySetInnerHTML={{ __html: choice.value }}></div>}
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
            <Button size="small" onClick={submit} disabled={!choice}>
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
