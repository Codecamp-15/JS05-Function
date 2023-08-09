console.log('anonymous');

// #1 : Named fn, FN Declaration
// function add () {}

// (function (message) {
//     console.log(message)
// }) ('hi');

//////// Intermediate Invoke Function Expression
// let test =  (function (x, y) {
//     console.log(x + y)
// }) (5, 6);

// console.log(test)
// Variable = Expression
let myVar = ((5 * 2 * 20) / 2) % 7;

// Variable = FN (FN Expression)
const myFunc = function(x, y) {
    return x + y;
};

console.log(myFunc(5, 10))

///////////////////////////

