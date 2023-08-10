// function soundOfBird() {    
//     console.log('เสียง นกกรงหัวจุกมันริก');
//     console.log('จุก');
//     console.log('กวิก กวิก กวิก');
// }
// soundOfBird();
// soundOfBird();
// soundOfBird();


function isPrime() {
    let n=5;
    let isPrime = true; //flag
    for(let divider = 2; divider <n; divider++) {
        //divider 2,3,4,5,...,n-1
        if(n% divider ==0) {
        isPrime = false;
        break;
}
    }
}if(isPrime = true) console.log(n);
