import { DATE_FORMAT } from './enums.js';

const formatMonthYear = dateString => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${year}`;
};

const formatYear = dateString => {
  const date = new Date(dateString);
  return date.getFullYear();
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
