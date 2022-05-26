import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function getElapsedTime(startTime: number, finishTime: number): string {
  return dayjs(startTime).from(finishTime, true);
}
