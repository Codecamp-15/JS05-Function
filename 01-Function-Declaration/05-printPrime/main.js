function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  function printPrime(limit) {
    const primeNumbers = [];
  
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
      }
    }
  
    console.log(primeNumbers.join(', '));
  }
  
  printPrime(7); // 2, 3, 5, 7
  printPrime(13); // 2, 3, 5, 7, 11, 13
  printPrime(14); // 2, 3, 5, 7, 11, 13
  