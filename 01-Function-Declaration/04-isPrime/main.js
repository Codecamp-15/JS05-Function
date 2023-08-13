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

function checkPrime(num) {
  let isPrime = true;
  for (let d = 2; d < num; d++) {
    if (num % d == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(`${num} is Prime Number`);
}

checkPrime(7);
checkPrime(69);
checkPrime(63);
checkPrime(13);
checkPrime(23);
