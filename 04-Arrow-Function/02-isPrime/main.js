const isPrime = n => {
    let isPrime = true;
    for (let divider =2 ; divider < n; divider++) {
        if  (n % divider == 0) {
            return false;
        }
    }
}  