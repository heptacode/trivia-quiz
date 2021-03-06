import { RenderHTML } from '@/components/RenderHTML';
import { RenderReviewChoiceItem } from '@/components/RenderReviewChoiceItem';
import { useReview } from '@/hooks/useReview';
import { Choice, Quiz } from '@/types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { Fragment } from 'react';

export default function Review() {
  const { quizzes, records, showCorrectQuestions, toggleShowCorrectQuestions, result, retry } =
    useReview();

  return (
    <Box sx={{ mt: 12 }}>
      <Typography variant="h5" align="center">
        오답 노트
      </Typography>

      <FormControlLabel
        control={
          <Checkbox
            id="toggleCorrectQuestions"
            checked={showCorrectQuestions}
            onChange={toggleShowCorrectQuestions}
          />
        }
        label="맞은 문제 포함"
      />

      {quizzes.map((quiz: Quiz, quizIndex: number) => {
        if (showCorrectQuestions || (!showCorrectQuestions && !records[quizIndex].isAnswer)) {
          return (
            <Card key={quizIndex} sx={{ mb: 3 }}>
              <CardHeader className="question" title={<RenderHTML html={quiz.question} />} />
              <CardContent>
                {quiz.choices.map((choice: Choice, choiceIndex: number) => (
                  <RenderReviewChoiceItem
                    choice={choice}
                    record={records[quizIndex]}
                    key={choiceIndex}
                  />
                ))}
              </CardContent>
            </Card>
          );
        }
        return <Fragment key={quizIndex}></Fragment>;
      })}
      <Button onClick={result}>결과 보기</Button>
      <Button id="retry" onClick={retry}>
        다시 풀기
      </Button>
    </Box>
  );
}
