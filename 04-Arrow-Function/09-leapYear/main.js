// ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year
// - leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว
// - ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว

// divided by 4 and no remainder => true
// 1800 => false
// 1900 => false
// 2000 => true

// divide by 100 with remainder  Leap year ** except divide by 400 is Leap Year
// the rest if divide by 4 with no remainder is Leap Year

//1 year == 365 (remaider 0.242199)
//2 year == 365 (remaider 0.242199)
//3 year == 365 (remaider 0.242199)
//4 year == 365 (remaider 0.242199)

// we need
// input as year
// return as boolean
// isLeapYear
// You can see that 4,100,400  we want to check the most difficult condition first

//Solution 2
/*
const isLeapYear = (year) => {
  if (year % 400 == 0) {
    return true;
  } else if (year % 100 == 0){
    return false;
  } else if (year % 4 == 0){
    return true;
  }
  else return false;
}; */

//Solution 3
/*
const isLeapYear = (year) => {
    if (year % 400 == 0) {
      return true;
    }  
    if (year % 100 == 0){
      return false;
    } 
    if (year % 4 == 0){
      return true;
    }
    return false;
  };
*/

//Solotion 4
/*
  if (year % 100 === 0) {
    return year % 400 == 0;
  }
return year % 4 === 0;
  */

//Solotion 5
/*
  if (year % 100 === 0) {
    return year % 400 == 0;  
  }
  return year % 4 === 0
*/

//Solotion 6
const isLeapYear = (year) =>
  year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
console.log(isLeapYear(2021));
