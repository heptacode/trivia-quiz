import { ResponsivePie } from '@nivo/pie';

export function PieChart() {
  const data = [
    {
      id: 'a',
      value: 7,
      color: '#32a852',
    },
    {
      id: 'b',
      value: 3,
      color: '#d84646',
    },
  ];

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ datum: 'data.color' }}
    />
  );
}
