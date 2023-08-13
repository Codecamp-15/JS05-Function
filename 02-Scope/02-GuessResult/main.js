let phrase = 'Hello';
if (true) {
  let user = 'John';
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // 
// Hello john เพราะ phrase เอาค่ามาจาก Global และ user เอาค่ามาจากใน funtion scope