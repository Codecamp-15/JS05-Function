let phrase = 'Hello';
if (true) {
  let user = 'John';
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // *Hello John เพราะว่าในฟังก์ชั่นไม่มีการกำหนัดค่าตัวแปลชื่อ phrase โปรแกรมเลยหาค่าจากglobalแทน