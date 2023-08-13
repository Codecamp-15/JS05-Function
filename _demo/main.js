//test pushpwd
///update
///update2
// function say() {
// console.log('ahhhh')
// console.log('bla bla bla')
// console.log('lololoool')
// }

// say();



function isPrime(n) {
    // let n = 5 
    let isPrime = true;
    for (let divider =2 ; divider < n; divider++) {
        if  (n % divider == 0) {
            isPrime = false;
            break;
        }
    } 
    if (isPrime) console.log(n)
}


isPrime(8)
isPrime(3)