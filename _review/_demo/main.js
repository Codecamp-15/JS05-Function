// test push , feedback branch
// Update solution

// function isPrime() {
//   let isPrime = true;
//   let n = 5;
//   for (let divider = 2; divider < n; divider++) {
//     if (n % divider == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) console.log(n);
// }

// isPrime();
// isPrime();
// isPrime();
// isPrime();
// isPrime();

// function myFunc(a) {
//   console.log(a);
// }

// function add(x, y) {
//   console.log(x + y);
// }

// add(5, 4);

// function announcement(stationName, doorSide) {
//   console.log(`next station ${stationName}.`);
//   console.log(`the door will open on the ${doorSide} hand side`);
// }

// announcement("Asoke", "right");

//default parameter ถ้าลืมประกาศใช้ doorway ใน announcement!
// function announcement(stationName, doorSide = "left") {
//   console.log(`next station ${stationName}.`);
//   console.log(`the door will open on the ${doorSide} hand side`);
// }

// announcement("Asoke");

//STAR PATTERN
//dynamics row => 1 for loop
//dynamics col => 1 for loop

//*
//**
//***
//****

// Prime Number
//ตัวตั้ง n (fixed)
//ตัวหาร dynamics => 1 loop

// n =5 : 2 3 4
//n = 6 : 2 3 4 5
//n = 7 : 2 3 4 5 6

// let n = 5;
// let isPrime = true;

// for(let divider = 2; divider < n; divider++){
//     if (n % divider === 0){
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) console.log(n);

//Design fn
//1-input ? => number ที่ใช้เช็ค
//2-logic implement?
//3-output ? => boolean true,false
// number => bool

// function checkPrime(num) {
//   let isPrime = true;
//   for (let d = 2; d < num; d++) {
//     if (num % d == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) console.log(`${num} is Prime Number`);
// }

// checkPrime(7);
// checkPrime(69);
// checkPrime(63);
// checkPrime(13);
// checkPrime(23);

// ##RETURN##
// function square(x) {
//   let result = x * x;
//   return result;
// }
// let result = square(4);
// console.log(result);

// function addTwo(n) {
//   let result = n + 2;
//   //   console.log("End calc");         //  สิ่งที่อยู่ก่อน return จะถูก log
//   return result;
//   //   console.log("End calc");          // แต่ถ้าอยู่หลัง return จะไม่ถูก log
// }

// let result = addTwo(5);
// console.log(result);

// function isPrime(num) {
//   for (let d = 2; d < num; d++) {
//     if (num % d == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function printPrime(limit) {
//   for (let n = 2; n <= limit; n++) {
//     if (isPrime(n)) {
//       console.log(n);
//     }
//   }
// }

// printPrime(69);

// ##### การเขียนฟังก์ชันมี 2 แบบหลักๆ
// 1. Function Declaration / Named Function
// 2. Function Expression / มักจะถูกเขียนในรูปของ Anonymous Function

// - การใช้งานฟังก์ชันต้อง
//1.ประกาศฟังก์ชัน => กำหนดชื่อ , input
// 2.เรียกใช้งาาน

function sayHi(name, lastname) {
  console.log(`Hello ${name} ${lastname}`);
}

// 2 call
sayHi("John", "Doe");
sayHi("Pavit", "Pimchanangul");

// Return value ผลลัพธ์ที่ได้จากการ  run function จนเสร็จ
//  add(5,6) === Return Value, FN result!!

function add(x, y) {
  // 0 sec.
  let result = x + y;
  // 5 sec.
  return result;
}

console.log(11 === add(5, 6)); // Done : add(5,6) === result === 11

let r = 5 + 6; //reusable result
console.log(r);
console.log(r);

console.log(add(5, 6)); // one time use
console.log(add(5, 6)); // one time use

function isEven(n) {
  //   if (n % 2 == 0) {
  //     return true;
  //   }
  //   return false;
  return n % 2 == 0;
  //   Return ตามด้วย expression !!!
  // return 6 % 2 === 0 (true)
  // return 5 % 2 === 0 (false)
}
console.log(isEven(6)); //true 6=n and 6 % 2 == 0 "True!!"
console.log(isEven(7)); //false 7=n and 7 % 2 !==0 "False!!"

// Checkpoint
// - Declare : ประกาศเป็น
// - Params : รับ input
// - Call : เข้าใจเรื่อง Return
// - Return : รันฟังก์ชัน

// ### FN Expression ############

let a = 5 * 2 + 7;
// FORMAT : variable = expression
/*
expression (สิ่งที่ evaluate เป็น single value  ได้!!!!!!!!!!!!!!!!!!)
- single value : 7
- combine expression : 7 + 2
- FN result : add(7,2)
*/

let myFunc = add;
let z = console.log;
// FORMAT  :  variable = FN (FN Expression)
// FN Expression : การ assign FN ให้กับ variable

console.log(myFunc(5, 2));
z("Hi"); // z = console.log;  => console.log("Hi")

// ##### Anonymous FN #######//
// อธิบาย : กำลัง assign Anonymous fn ให้กับตัวแปร sayHello
const sayHello = function (name) {
  console.log("Hi" + name);
};
sayHello("Expression");

// 1. function add () {}
// 2A. let add = function () {}
// 2B. let add = () => {}

const minus = (a, b) => a - b;
const minusTwo = (a) => a - 2;
const two = 2;

// console.log(minusTwo);
// console.log(two()); This is WRONG!!
