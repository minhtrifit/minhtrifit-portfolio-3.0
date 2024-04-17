export const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

export const getCurrentTime = () => {
  const currentDate = new Date();

  // Get hours, minutes, and seconds
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const time = hours + ":" + minutes + ":" + seconds;

  // Get month, day, and year
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const date = month + "/" + day + "/" + year;

  const timestamp = date + " " + time;

  return timestamp;
};
