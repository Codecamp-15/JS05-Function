const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  };
  
  console.log(isPrime(2)); // true
  console.log(isPrime(4)); // false
  console.log(isPrime(17)); // true
  console.log(isPrime(20)); // false
  