// ABSTRACTION
// คิดก่อนว่าอะไรต้องเป็น Input

// DAY => SEC

// 1DAY = 24 HR * 60 MIN * 60 SEC
// 1DAY = 24 * 60 * 60 
// 2DAY = 2 * 1 DAY = 2 * 24 * 60 * 60
// 3DAY = 3 * 24 * 60 * 60; 

const Hour_In_Day = 24;
const MIN_IN_HOUR = 60;
const SEC_IN_MIN = 60;

const convertDayToSec = (day) => day * Hour_In_Day * SEC_IN_MIN;