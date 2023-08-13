// ABSTRACTION
// คิดก่อนว่าอะไรต้องเป็น input 


// DAY => SEC

// 1 DAY = 24 HR * 60 MIN * 60 SEC
// 1 DAY = 24 * 60 *60
// 2 DAY = 2 1 DAY  = 2 * 24 * 60 * 60 
// 3 DAY = 3 * 24 * 60 * 60;

const HOUR_IN_DAY =  24;
const MIN_IN_HOUR = 60;
const SEC_IN_MIN = 60;

const convertDayToSec = (day) => day * HOUR_IN_DAY * MIN_IN_HOUR * SEC_IN_MIN