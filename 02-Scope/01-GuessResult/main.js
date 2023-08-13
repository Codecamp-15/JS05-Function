let name = 'John';
function sayHi() {
  alert('Hi, ' + name);
}
name = 'Pete';
sayHi(); // *
// Hi, pate เพราะ name ถูกรีค่าให้เป็น pate ก่อนจะใช้ function