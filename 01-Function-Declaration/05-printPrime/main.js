function isPrime(num) {
    for (let d = 2; d < num; d++) {
        // console.log(d);
        if (num % d == 0) {
            return false;
        }
    }

    return true;
}

function printPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        if (isPrime(n)) {
            console.log(n);
        }
    }
}

printPrime(50);