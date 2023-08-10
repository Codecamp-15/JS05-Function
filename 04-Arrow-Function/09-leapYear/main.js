//หาร4ลงตัว
//1800 false
//1900 false
//2000 true

//100 ลงตัวไม่เป็น Leap Year *** ยกเว้นหาร 400 ลงตัวเป็น Leap Year
//ที่เหลือ หาร 4 ลงตัว เป็น Leap Year

//1 Year == 1 รอบการโคจรรอบดวงอาทิตย์ == 365.242199 days

//1 Year == 365.00 (เศษ 0.242199)
//2 Year == 365.00 (เศษ 0.242199)
//3 Year == 365.00 (เศษ 0.242199)
//4 Year == 365.00 (เศษ 0.242199) + 1day (4*0.24119 == 0.96 เกิน 0.04)

//ชด 25 ครั้ง => เกินไป 25 * 0.04 วัน => 1 วัน

//100ปีไม่ควรชด

//isLeapYear : Year -> Boolean

//Ans#1
// const isLeapYear = (year) => {
//     if(year%4 ===0 && year%100 != 0){
//         return true;
//     } else if (year %100 ===0 && year%400 !=0)
//     {    return false;
//     } else if (year%4==0){
//         return true;
//     }
// }

//Ans#2
    // if(year%400 ==0){
    //     return true;
    // }
    // else if (year%100==0) {
    //     return false;
    // }
    // else if (year%4==0) {
    //     return true;
    // }

//Ans#3
    // if (year % 400 == 0){
    //     return true;
    // }
    // if (year % 100 == 0) {
    //     return false;
    // } 
    // if (year % 4 === 0){
    //     return true;
    // }
    // return false;

//Ans#4
    // if(year % 100 === 0){
    //     return year % 400== 0;
    // }
    // return year % 4 === 0;

//Ans#5
    // return year % 100 === 0 ? year %400==0:year%4 ===0;

//Ans#6
    const isLeapYear = (year) => (year & 100 === 0 ? year %400==0:year%4 ===0);

console.log(2023);


