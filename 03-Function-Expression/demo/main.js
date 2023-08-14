//Function Expression

//1 Name of Fn, FN Declaration
//function add (){}

//2 Function Expression
//2A) IIFE Intermediate Invoke Function Expression
(function (message) {
  console.log(message);
})("hi")(
  //not reusable, be used and throw
  //declare and call right away
  function (x, y) {
    console.log(x + y);
  }
)(5, 8);

let a = (function (x, y) {
  console.log(x + y);
})(4, 9);

console.log(a);

//2B
// Variable = Expression
let myVar = ((5 * 2 * 4) / 20) % 7;
//Variable , assign func to variable
const myFunc = function (x, y) {
  return x + y;
};
console.log(myFunc(5, 8));

//Asign name FN to variable
const a = console.log;

//### anonym (modern: arrow Syntax)
let a = function (x) {
  return x ** 2;
};
//Version A: shortest version
let b = (x, y) => x ** 2;

//Version B: Bracket
let c = (x, y) => {
  let result = x + y;
  return result;
};

console.log(z(3));
console.log(a(3));
console.log(b(3));
console.log(c(3));
