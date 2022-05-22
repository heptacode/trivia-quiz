import { DatumId } from '@nivo/pie';

/**
 * Nivo 차트 데이터
 *
 * @member {DatumId} id: 고유값
 * @member {boolean} label?: 레이블
 * @member {number} value: 값(수치)
 * @member {string} color?: 색상
 */
export interface ChartData {
  id: DatumId;
  label?: DatumId;
  value: number;
  color?: string;
}
