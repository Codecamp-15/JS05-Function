function checkPrime(num) {
  let isPrime = true;
  for (let d = 2; d < num; d++) {
    if (num % d == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(num);
}

function printPrime(limit) {
  for (let n = 2; n <= limit; n++) {
    // n= 2,3,4,5,6....,71(limit)
    checkPrime(n);
  }
}
printPrime(150);

// function printPrime(limit) {
//     for (let n = 2; n <= limit; n++) {
//         checkPrime(n);
//     }
// }
// printPrime(71);
// checkPrime(2);
// checkPrime(3);
// checkPrime(4);
// checkPrime(5);
// checkPrime(6);
// checkPrime(7);
// checkPrime(8);
// checkPrime(9);
// checkPrime(10);
// checkPrime(11);
// checkPrime(12);
// checkPrime(13);

// ABSTRACTION
// - simple ideas => one idea
// - hiding complexity
// - simple interaction
