import { RenderHTML } from '@/components/RenderHTML';
import { RenderReviewChoiceItem } from '@/components/RenderReviewChoiceItem';
import { useReview } from '@/hooks/useReview';
import { Choice, Quiz } from '@/types';
import { Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material';

export function Review() {
  const { quizzes, records, result, retry } = useReview();

  return (
    <Box sx={{ mt: 12 }}>
      <Typography variant="h5" align="center">
        오답 노트
      </Typography>

      {quizzes.map((quiz: Quiz, quizIndex: number) => {
        return (
          <Card key={quizIndex} sx={{ mb: 3 }}>
            <CardHeader title={<RenderHTML html={quiz.question} />} />
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
      })}
      <Button onClick={result}>결과 보기</Button>
      <Button onClick={retry}>다시 풀기</Button>
    </Box>
  );
}
