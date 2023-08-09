let input = Number(prompt("Enter Input"));
function printPrime(value){

    for(let count = 2; count <= value; count++){
        /* console.log(count); */
        let isPrime = true; 
        for (let i = 2; i < count; i++) {
          if (count % i == 0) {
            isPrime = false;
          }
        }
        if (isPrime) {
          console.warn(`${count}`);
        }
    }
}

printPrime(input);
