const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(); // If no end date, assume ongoing

  // Check if start date is the 1st and end date is within the same month
  const startIsFullMonth = start.getDate() === 1;
  const endIsFullMonth = end.getDate() === new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate() ||
    end.getMonth() === start.getMonth();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  // Adjust for full month counts based on day of start and end dates
  if (startIsFullMonth && endIsFullMonth) {
    months += 1; // Consider the month as complete
  }

  // Calculate total months, adjusting for cases where months go negative
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Convert months to years if total months are 12 or more
  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  return {
    years,
    months,
  };
};

const Duration = ({ startDate, endDate }) => {
  const { years, months } = calculateDuration(startDate, endDate);
  const formattedYears = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const formattedMonths = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

  const text = `${formattedYears} ${formattedMonths}`.trim();
  if (!text) return null;
  return <>({text})</>;
};

export default Duration;
