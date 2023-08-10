console.log('anonymous');

//#1 : Named fn, FN Declaration
// function add () {}

//#2 : Anonymous

// (function(message){
//     console.log(message);
// })('hi');

//IIFE :Intermediate Invoke Function Expression

// (function (x,y) {
//     console.log(x+y);
// })(10,5);

// let a =(function(x,y) {
//     return x+y;  //ใช้ครั้งเดียว
// })(10,7);

//#2B
//VARIABLE = EXPRESSION
// let myVar = ((5*2*20)/2)%7;

//VARIABLE = FN (FN == EXPRESSION)
// const myFunc = function(x,y) {
//     return x+y;
// };


//### ANONYM (MODERN : ARROW SYNTAX)

// let a = function (x) {
//     return x **2 ;
// };
//A:Shortest
// let a = 
// let b = (x,y) => x+y;

//B:Bracket
let c = (x,y) => {
    let result = x + y;
    return result;
};