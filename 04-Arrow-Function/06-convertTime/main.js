// Abstraction
// คิดก่อนว่าอะไรต้องเป็น input
// Day => Sec

// 1 Day = 24 hrs. * 60 mins * 60 secs.
// 1 Day = 24 * 60 *60
// 2 Day = 2 * 1 Day = 2 * 24 * 60 *60
// 3 Day = 3 * 24 * 60 * 60;

let day = +prompt("how many days?");

const Hour_In_Day = 24;
const Min_In_Hour = 60;
const Sec_In_Min = 60;

const convertDayToSec = (day) => {
  return day * Hour_In_Day * Min_In_Hour * Sec_In_Min;
};

const seconds = convertDayToSec(day);
console.log(`${day} days is equal to ${seconds} seconds`);
