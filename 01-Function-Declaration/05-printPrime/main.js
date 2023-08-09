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

const printPrime = (limit) => {
    for(let i = 2; i < limit; i++) {
        checkPrime(i)
    }
}