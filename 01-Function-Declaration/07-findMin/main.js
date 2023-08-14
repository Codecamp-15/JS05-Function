// - ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
// - พารามิเตอร์มีได้มากสุด 4 ตัว
// - หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
// - เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้

// ```js
// max(); // undefined
// max(2); // 2
// max(3, 1); // 3
// max(7, 3, 9, 2); // 9
// ```

// function maxNumber(num1, num2, num3, num4) {
//   let highestNum = Math.max(num1, num2, num3, num4);

//   console.log(highestNum);
//   // return highestNum;
// }
// maxNumber();

function maxNumber(num1, num2 = 0, num3 = 0, num4 = 0) {
  let highestNum = Math.max(num1, num2, num3, num4);

  if (typeof highestNum === 'number' && !isNaN(highestNum)) {
    console.log(highestNum);
  } else {
    console.log('undefined');
  }
}
maxNumber(2, 40, 52, 40);
