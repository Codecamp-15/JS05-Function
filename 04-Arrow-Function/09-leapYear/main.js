// ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year
// - leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว
// - ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว

// หาร 4 ลง => true
// 1800 => false
// 1900 => false
// 2000 => true

// 100 ลงตัวไม่เป็น Leap Year *** ยกเว้นหาร 400 ลงตัวเป็น Leap Year
// ที่เหลือ หาร 4 ลงตัว เป็น Leap Year

// 1 Year == 1 รอบของการโคจรรอบดวงอาทิตย์ == 365.242199 days

// 1 Year == 365.00 (เศษ 0.242199)
// 2 Year == 365.00 (เศษ 0.242199)
// 3 Year == 365.00 (เศษ 0.242199)
// 4 Year == 365.00 (เศษ 0.242199) + 1 Day (4*0.24119 == 0.96 เกิน 0.04)

// ชด 25 ครั้ง ==> เกินไป 25 * 0.04 วัน => 1 วัน

// 100 ไม่ควรชด

// isLeapYear :  YEAR => BOOLEAN
// 4,100,400

// V1
// if (year % 400 == 0) {
//     return true;
// }
// if (year % 100 == 0) {
//     return false;
// }
// // V2
// if (year % 100 === 0) {
//     // 100,200,300,400,...
//     return year % 400 == 0;
// }

    const isLeapYear = (year) => {
        if (year % 400 === 0) {
          return true;
        }
        if (year % 100 === 0) {
          return false;
        }
        return year % 4 === 0;
      };
      
    // // #1
    // if (year % 4 === 0 && year % 100 !== 0) {
    //     return true;
    // } else if (year % 100 === 0 && year % 400 !== 0) {
    //     return false;
    // } else if (year % 400 == 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    // // #2
    // if (year % 400 == 0) {
    //     return true;
    // } else if (year % 100 == 0) {
    //     return false;
    // } else if (year % 4 == 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    // // #3
    // if (year % 400 == 0) {
    //     return true;
    // }
    // if (year % 100 == 0) {
    //     return false;
    // }
    // if (year % 4 === 0) {
    //     return true;
    // }
    // return false;
    // // #4
    // if (year % 100 === 0) {
    //     // 100,200,300,400,...
    //     return year % 400 == 0;
    // }
    // return year % 4 === 0;
    // // #5
    // return year % 100 === 0 ? year % 400 == 0 : year % 4 === 0;
    // };
    
    const isLeapYear = (year) => (year % 100 === 0 ? year % 400 == 0 : year % 4 === 0);


