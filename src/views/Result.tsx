import { PieChart, ChartArea } from '@/components/charts';

export function Result() {
  return (
    <div>
      Results
      <ChartArea>
        <PieChart />
      </ChartArea>
    </div>
  );
}
