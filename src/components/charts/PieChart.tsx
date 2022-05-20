import { ChartData } from '@/types';
import { ResponsivePie } from '@nivo/pie';

interface Props {
  chartData: ChartData[];
}

export function PieChart({ chartData }: Props) {
  return (
    <ResponsivePie
      data={chartData ?? []}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ datum: 'data.color' }}
    />
  );
}
