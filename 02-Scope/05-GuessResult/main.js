// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
// let message = "Welcome to Thailand";

// function logMessage(message) {
//   message = "Hello everybody";
//   console.log(message); // *
// }

// logMessage(message);
// console.log(message); // **
// ```

// let name = "John";

// function sayHi(input) {
//   console.log(name); // ***
//   name = input;
// }

// sayHi();
// console.log(name); // ****

// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

let message = 'Welcome to Thailand';

function logMessage(message) {
  message = 'Hello everybody';
  console.log(message); // * //Hello everybody
}

logMessage(message);
console.log(message); // ** Welcome to Thialand because we console.log from outside of the function

// let message = "Welcome to Thailand";
// console.log(message); // ** Welcome to Thialand because we console.log from outside of the function

let name = 'John';

function sayHi(input) {
  console.log(name); // *** John, take value outside scope
  name = input;
}
sayHi();
