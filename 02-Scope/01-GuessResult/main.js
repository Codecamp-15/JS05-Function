let name = 'John';
function sayHi() {
  alert('Hi, ' + name);
}
name = 'Pete';
sayHi(); // *Pete เพราะบรรทัดล่างมีการอัพเดทค่า global ก่อนที่จะเรียกใช้ฟังก์ชั่น
