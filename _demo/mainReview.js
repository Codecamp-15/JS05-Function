/*
### There are 2 different types of Function

1. Function Declaration /Name Function
2. Function Expression / anonymous funtion

Step of using function */
//1 Define => declare function name, parameter (s)
// function sayHi(){  // this is an example of receiveing two parameters (name, lastName)
//     console.log(`Hello: ${ameofFunnc}`)
// }
//2 Call
// sayHi();
// sayHi();

//RETURN VALUE is the outout from the complete function

// function add() {
//     let result = x+y ;

//     return result;
// }
// console.log(11 === add(5,6));// Done add(5,6)  //This is one time use

// let r = add(5,6); //reuseable
// console.log(r);
// console.log(r);

//More Example

// function isEven(){
//     if (n % 2 == 0) {
//         return true;
//     } else {
//         return false;
// }
//     }

// if (n % 2 == 0) {
//     return true;
// }
//     return false;

// return n % 2 == 0;

// }
// console.log(isEven(6));

//CheckPoint : You should
//--Declare
//--params
//--Call
//--Return  : if you dont define the Return, it will turn as undefined;

/*

Expression
-- single value 
-- combined expression
-- FN result : add(7,2)

*/

// let myFunc = add;
// console.log(myFunc(5,6));

// let z = console.log();
// z('hi');

//1. function(): {}
//2A let add = function(){}
//2B let add = () => {}

const minus = (a, b) => {
  return a - b;
};
//undefined
minus(6, 4);
//return 2

// const minusTwo = (a) => a- 2;
const minusTwo = (a) => a - 2;
console.log(minusTwo(6));
