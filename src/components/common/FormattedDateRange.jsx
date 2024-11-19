import React from 'react';
import { DATE_FORMAT } from './enums.js';
import FormattedDate from './FormattedDate.jsx';

const FormattedDateRange = ({ startDate, endDate, format = DATE_FORMAT.MONTH_YEAR }) => {
  return <>
    <FormattedDate
      date={startDate}
      format={format}
    />
    {' - '}
    {endDate ? <FormattedDate
      date={endDate}
      format={format}
    /> : 'Present'}
  </>;
};

export default FormattedDateRange;
