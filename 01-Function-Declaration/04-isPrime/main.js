
//design FN
//1-input ? => umber ที่ใช้เช็ค
//2-logic implement ?
//3-output ? => boolean true,false
//number => bool
let num;
function checkPrime(num) {
    let isPrime = true;
    for(let divider = 2; divider <num; divider++) {
        if(num% divider ==0) {
        isPrime = false;
        break;
    }
}
    if(isPrime) console.log(num);
}

checkPrime(7);
checkPrime(8);