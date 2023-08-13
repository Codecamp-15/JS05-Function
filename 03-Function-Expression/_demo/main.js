console.log('anonymous');

// #1 : Named fn, FN Declaration
// function add () {}


// #2 : Anonymous

// (function (x, y) {
//     console.log(x + y);
// })(10, 5);

// console.log(
// (function (x, y) {
//     return x + y;
// })(10, 5)
// );

// let a = (function (x, y) {
//     return x + y;
// }) (10, 7);
// console.log(a);


let myVar = ((5 * 2 * 20) / 2) % 7;

// VARIABLE = FN (FN == EXPRESSION) เป็นการ assign function ให้ตัวแปร ไม่ว่าfuncนั้นจะมีชื่อหรือไม่ก็ตาม จึงไม่ถือรวมเป็นAnonymous

console.log(myFunc(5, 10));
let myFunc = function (x, y) {
    return x + y;
}

console.log(myFunc(5, 10));

// ASSIGN name FN to variable
const a = console.log;
a('hi')


// ### ANONYM (MODERN : ARROW SYSTAX)
