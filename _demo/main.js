// test push , feedback.branch
// update solution

// function soundOfBird() {
// console.log('เสียงง นกกรงหัวจุกมันริก');
// console.log('ริก');
// console.log('กวิ๊ก ๆๆๆๆๆๆ');
// }

// //Call
// soundOfBird();
// soundOfBird();
// soundOfBird();
// soundOfBird();
// soundOfBird();


function isPrime() {
    let n = 5;
    let isPrime = true;
    for (let divider = 2; divider < n; divider++) {
    if (n % divider == 0) {
        isPrime = false;
        break;
        } 
    }
    if (isPrime) console.log(n);
}

isPrime();
isPrime();
isPrime();
isPrime();