import { DatumId, PieArc } from '@nivo/pie';

export interface ChartData {
  id: DatumId;
  label?: DatumId;
  value: number;
  formattedValue?: string;
  color?: string;
  fill?: string;
  data?: any;
  arc?: PieArc;
  hidden?: boolean;
}
