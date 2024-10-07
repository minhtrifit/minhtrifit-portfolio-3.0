export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0"); // Get day and pad with 0 if necessary
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month and pad with 0 (getMonth() is zero-indexed)
  const year = date.getFullYear(); // Get full year

  return `${day}/${month}/${year}`;
};
