//building a function
//Starting the function with ()parenthysis and bracket
// Function nameoffunction (){

// }
//call the functiion,
//nameoffunction() follow by parenthysis

// function soundOfBird(){

//     console.log('okay')
//     console.log('sing sing sing')
//     console.log('and keep singing')
// }

// soundOfBird();

function isPrime() {
  for (let n = 2; n <= 100; n++) {
    let isPrime = true;
    for (let divider = 2; divider < n; divider++) {
      if (n % divider == 0) isPrime = false;
      break;
    }
    if (isPrime) console.log(n);
  }
}
