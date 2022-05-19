import useQuiz from '@/hooks/useQuiz';
import { useGlobalStore } from '@/store/useGlobalStore';
import { Choice } from '@/types';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  MobileStepper,
  Radio,
  RadioGroup,
} from '@mui/material';

export default function Quiz() {
  const { quizIndex, question, choice, setChoice, choices, submit } = useQuiz();
  const { correctQuestions, setCorrectQuestions, incorrectQuestions, setIncorrectQuestions } =
    useGlobalStore();

  return (
    <Card sx={{ maxWidth: 400, mt: 10 }}>
      <CardHeader title={question} />
      <CardContent>
        <RadioGroup name="radio-buttons-group" onChange={event => setChoice(event.target.value)}>
          {choices.map((choice: Choice, index: number) => {
            return (
              <FormControlLabel
                key={index}
                control={<Radio />}
                value={choice.value}
                label={choice.value + choice.isAnswer}
              />
            );
          })}
        </RadioGroup>
        quizIndex: {quizIndex} / correctQuestions: {correctQuestions} / incorrectQuestions:{' '}
        {incorrectQuestions}
      </CardContent>
      <MobileStepper
        steps={10}
        position="static"
        activeStep={quizIndex}
        backButton={
          <Button size="small">
            <KeyboardArrowLeft />
            이전 문항
          </Button>
        }
        nextButton={
          <Button size="small" onClick={submit} disabled={!choice}>
            다음 문항
            <KeyboardArrowRight />
          </Button>
        }
      />
    </Card>
  );
}
