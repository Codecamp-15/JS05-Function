// - ให้ใช้คำสั่ง prompt เพื่อรับชื่อผู้ใช้งาน
// - ให้สร้างฟังก์ชันชื่อ sayHelloUser
// - เมื่อเรียกใช้ฟังก์ชันให้ alert คำว่า “Hello ” ตามด้วยชื่อผู้ใช้งาน

function sayHelloUser() {
  let userName = prompt("Enter username");
  {
    alert(`Hello: ${userName}`);
    console.log(`Hello: ${userName}`);
  }
}
sayHelloUser();

//DONE!
