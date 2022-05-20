import { ChartArea, PieChart } from '@/components/charts';
import { useGlobalStore } from '@/store/useGlobalStore';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export function Result() {
  const { correctQuestions, incorrectQuestions } = useGlobalStore();

  const chartData = [
    {
      id: '맞은 개수',
      value: correctQuestions,
      color: '#32a852',
    },
    {
      id: '틀린 개수',
      value: incorrectQuestions,
      color: '#d84646',
    },
  ];

  return (
    <Card sx={{ maxWidth: 400, mt: 10 }}>
      <CardHeader title="결과" />
      <CardContent>
        <Typography variant="subtitle1">맞은 개수: {correctQuestions}</Typography>
        <Typography variant="subtitle1">틀린 개수: {incorrectQuestions}</Typography>

        <ChartArea>
          <PieChart chartData={chartData} />
        </ChartArea>
      </CardContent>
    </Card>
  );
}
