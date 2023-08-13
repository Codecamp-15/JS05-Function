const Prime = (a) => {
  let isPrime = true;
  for (let n = 2; n <= a; n++) {
    for (let divider = 2; divider < n; divider++) {
      if (a % divider == 0) {
        isPrime = false;
        break;
      }
    }
    // if (isPrime) console.log(n);
  }
  console.log(isPrime);
};

Prime(5);
// console.log(isPrime(6));
