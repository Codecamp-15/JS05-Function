// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// ```js
// let phrase = 'Hello';
// if (true) {
//   let user = 'John';
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }
// sayHi(); // *
// ```

let phrase = 'Hello';
if (true) {
  let user = 'John';
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // * Hello John
//return undefined;
