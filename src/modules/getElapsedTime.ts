import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function getElapsedTime(startTime: Date, finishTime: Date): string {
  return dayjs(startTime).from(finishTime, true);
}
