export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

export const formatDate = (date) => {
  const format = {
    weekday: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("pl-PL", format);
  return (
    formattedDate.charAt(0).toUpperCase() +
    formattedDate.slice(1).replace(",", "")
  );
};

export function isSameDay(date1, date2) {
  // Extract year, month, and day from both dates
  const day1 = date1.getDate();
  const month1 = date1.getMonth(); // months are 0-indexed
  const year1 = date1.getFullYear();

  const day2 = date2.getDate();
  const month2 = date2.getMonth(); // months are 0-indexed
  const year2 = date2.getFullYear();

  // Compare year, month, and day
  return year1 === year2 && month1 === month2 && day1 === day2;
}

export function isToday(date) {
  const selected = new Date(date);
  const today = new Date();
  return (
    today.getFullYear() === selected.getFullYear() &&
    today.getMonth() === selected.getMonth() &&
    today.getDate() === selected.getDate()
  );
}
