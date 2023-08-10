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
        checkPrime(n);
        
    }
}
//printPrime(7);
//printPrime(13);
printPrime(14);