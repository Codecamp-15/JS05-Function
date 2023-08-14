let primeNumber = (number) => {
   
        let isPrime = true;
        for(let i = 2; i < number;  i++){
            if (number % i == 0) {
                isPrime = false
            }
        }
        if (isPrime) {
            console.log(`${number} is Prime Number`);
        }
        else{
            console.log(`${number} is Not Prime Number`);
        }
 
}

console.log(primeNumber(5));