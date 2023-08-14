// ให้เขียนฟังก์ชัน Convert day to second

//input that user could enter is day or days
const hourInDay = 24; // 24
const minuteInHour = 60;
const secondInMinute = 60;

const dayToSecond = (days) => {
  return days * hourInDay * minuteInHour * secondInMinute;
};
console.log(dayToSecond(34));
