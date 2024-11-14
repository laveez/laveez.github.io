export const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(); // If no end date, assume ongoing

  // Check if start date is the 1st and end date is the last day of the month
  const startIsFullMonth = start.getDate() === 1;
  const endIsFullMonth = end.getDate() === new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate();

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

  return `${years > 0 ? `${years} yr${years > 1 ? 's' : ''} ` : ''}
  ${months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : ''}`.trim();
};
