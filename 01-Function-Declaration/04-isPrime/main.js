// function checkprime(n){
//     let isPrime = true;
//     for (divider = 2; divider < n ; divider++) {
//         if(n % divider == 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) console.log(n)
// }

    // DESIGN FUNCTION
    //INPUT ? ===> number ที่ใช้เช็ค
    // LOGIC IMPLEMENT
    // OUTPUT ===> ให้สร้างฟังก์ชั่นตรวจสอบ ==> boolean True,False
    //number => boolean
    // 


// function printPrime(limit){
// for (let n = 2; n <= limit; n++) {
//     checkprime(n);
// }
// }

// printPrime(prompt('Enter'));

let checkprime = prompt('EnterNumber')

function isPrime(checkprime) {
    for (let d = 2; d < checkprime; d++) {
        console.log(d);
        if (checkprime % d == 0) {
            return false;
        }
    }

    return true;
}

alert(isPrime(checkprime));