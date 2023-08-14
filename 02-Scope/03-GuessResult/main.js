// บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
// function sayHi(name) {
//   let name = "Guest";
//   console.log(name); // *
// }

// sayHi("Jim");
// ```

function sayHi(name) {
  let name = 'Guest';
  console.log(name); // * //eror because of name was declare twice
}

sayHi('Jim');
