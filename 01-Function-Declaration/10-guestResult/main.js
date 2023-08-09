function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // * error เพราะเรียกใช้ฟังก์ชั่นไม่ถูกต้อง
console.log(sayHi(10)); // ** Hi kid เพราะเรียกใช้อย่างถูกต้อง และเงื่อนไขตามที่ฟังก์ชั่นกำหนด
