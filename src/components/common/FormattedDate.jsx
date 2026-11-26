import { DATE_FORMAT } from './enums.js';

// Date-only strings parse as UTC midnight, so they are read back in UTC too:
// local getters show visitors west of UTC the previous month, or year
const formatMonthYear = dateString => {
  const date = new Date(dateString);
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();
  return `${month}/${year}`;
};

const formatYear = dateString => {
  const date = new Date(dateString);
  return date.getUTCFullYear();
};

const FormattedDate = ({ date, format = DATE_FORMAT.MONTH_YEAR }) => {
  if (!date) {
    return null;
  }

  if (format === DATE_FORMAT.MONTH_YEAR) {
    return formatMonthYear(date);
  }

  if (format === DATE_FORMAT.YEAR) {
    return formatYear(date);
  }

  return date;
};

export default FormattedDate;
