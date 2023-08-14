function sayHi(age) {
  if (age < 12) alert('Hi kid');
}
console.log(sayHi); // * it will just let you know that this is a function called sayHI
console.log(sayHi(10)); //** it will alert Hi Kid but in the console.log it will be undefined because the function does not return anything
