import { parseISO, format } from 'date-fns';
import { enUS, es } from 'date-fns/locale';
import '../index.css';

// Map locales to their respective `date-fns` locale objects
const locales = {
  'en-US': enUS,
  'es-ES': es
};

export function Date({ dateString, userLocale = 'en-US' }) {
  const date = parseISO(dateString);
  const localeObj = locales[userLocale] || enUS; // default to 'en-US' if locale is not supported
  return <span dateTime={dateString}>{format(date, 'LLL d, yyyy', { locale: localeObj })}</span>;
}

export function Time({ timeString, userLocale = 'en-US' }) {
  const time = parseISO(timeString);
  const localeObj = locales[userLocale] || enUS; // default to 'en-US' if locale is not supported
  return <span>{format(time, 'h:mm a', { locale: localeObj }).toLowerCase()}</span>;
}