function isPrime(value){
    
        let isPrime = true; 
        for (let i = 2; i < value; i++) {
          if (value % i == 0) {
            isPrime = false;
          }
        }
        if (isPrime) {
          console.warn(`${value} is Prime Number`);
        } else {
          console.log(`${value} Not Prime number`);
        }
}

isPrime(3);
isPrime(11);
isPrime(4);
isPrime(24);
isPrime(71);

