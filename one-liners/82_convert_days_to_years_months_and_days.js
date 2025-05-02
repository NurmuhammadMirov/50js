// convert a given number of days to years, months, and remaining days.

const daysToYearsMonthsDays = (days) => {
  const years = Math.floor(days / 365);
  const remainingDays = days % 365;
  const months = Math.floor(remainingDays / 30);
  const remainingDaysInMonth = remainingDays % 30;
  return `${years} years, ${months} months, and ${remainingDaysInMonth} days`;
};

console.log(daysToYearsMonthsDays(600)); // '1 years, 7 months, and 25 days'