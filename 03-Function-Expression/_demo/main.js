console.log('anonymous');

//1# : Name fn,FN Declaration
// function add() {}



//#2 : Anonymous

// (function (x,y) {
//     console.log(x + y);
//     return 5;
// })(10, 5);

// console.log(
// (function (x,y) {
//     console.log(x + y);
//     return 5;
// })(10, 5)
// );

let a = (function (x, y) {
    return x+y;
})(10, 7);

//console.log(a);

// #2B

// VARIABLE = EXPRESSION
let myVar = ((5 * 2 * 20) / 2) % 7;

// VARIABLE = FN (FN ==EXPRESSION)

ASSi
const myFunc = function(x, y) {
    return x+y;
};

//ASSIGN named FN to variable
const a = console.log;
console.log(myFunc(5, 10));
a('h1');