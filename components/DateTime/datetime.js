import { parseISO, format } from 'date-fns';
import '../index.css'

export function Date({ dateString }) {
  const date = parseISO(dateString);
  return <span dateTime={dateString}>{format(date, 'LLL d, yyyy')}</span>;
}

export function Time({ timeString }) {
  const time = parseISO(timeString);
  return <span>{format(time, 'h:mm a').toLowerCase()}</span>;
}