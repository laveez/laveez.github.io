// Date-only strings parse as UTC midnight, so every date in here is read in UTC.
// Today is built from the visitor's own calendar date, so the count turns at their midnight.
const today = () => {
  const now = new Date();
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
};

const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : today(); // If no end date, assume ongoing

  if (start > end) return { years: 0, months: 0 };

  const lastDayOfEndMonth = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth() + 1, 0)).getUTCDate();
  const startsOnFirst = start.getUTCDate() === 1;
  const endsOnLastDay = end.getUTCDate() === lastDayOfEndMonth;
  // A finished entry dated inside its last month counts that month, as its "05/2018" label does.
  // An ongoing one counts the current month only while that is still the month it started in.
  const endsInStartMonth = end.getUTCMonth() === start.getUTCMonth() &&
    (Boolean(endDate) || end.getUTCFullYear() === start.getUTCFullYear());

  let months = (end.getUTCFullYear() - start.getUTCFullYear()) * 12 + end.getUTCMonth() - start.getUTCMonth();

  if (startsOnFirst && (endsOnLastDay || endsInStartMonth)) {
    months += 1;
  } else if (!startsOnFirst && end.getUTCDate() < start.getUTCDate()) {
    // A mid-month start has not finished its latest month yet
    months -= 1;
  }

  return { years: Math.floor(months / 12), months: months % 12 };
};

const Duration = ({ startDate, endDate }) => {
  const { years, months } = calculateDuration(startDate, endDate);
  const formattedYears = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const formattedMonths = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

  const text = [ formattedYears, formattedMonths ].filter(Boolean).join(', ');
  if (!text) return null;
  return <>({text})</>;
};

export default Duration;
