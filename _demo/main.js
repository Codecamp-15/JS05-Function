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
