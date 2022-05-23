import { ChartArea, PieChart } from '@/components/charts';
import { useResult } from '@/hooks/useResult';
import { getElapsedTime } from '@/modules/getElapsedTime';
import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import green from '@mui/material/colors/green';
import red from '@mui/material/colors/red';

export function Result() {
  const { retry, review, startTime, finishTime, correctQuestions, incorrectQuestions } =
    useResult();

  const chartData = [
    {
      id: '맞은 개수',
      value: correctQuestions || 7,
      color: green[300],
    },
    {
      id: '틀린 개수',
      value: incorrectQuestions || 3,
      color: red[300],
    },
  ];

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="결과" />
      <CardContent>
        <Typography variant="subtitle1">
          소요 시간: {getElapsedTime(startTime, finishTime)}
        </Typography>
        <Typography variant="subtitle1">맞은 개수: {correctQuestions}문항</Typography>
        <Typography variant="subtitle1">틀린 개수: {incorrectQuestions}문항</Typography>

        <ChartArea>
          <PieChart chartData={chartData} />
        </ChartArea>

        <Button onClick={retry}>다시 풀기</Button>
        <Button onClick={review}>오답 노트</Button>
      </CardContent>
    </Card>
  );
}
