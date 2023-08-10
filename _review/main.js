/*
### การเขียนฟังก์ชั่นมี 2 แบบหลักๆ

1.Function Declaration / Named Function
2.Function Expression/ มักจะถูกเขียนในรูปของ Anonymmous Function */

/*การใช้งานฟังก์ชั่นต้อง
1.ประกาศฟังก์ชั่น => กำหนดชื่อ, input
2.เรียกใช้งาน
*/

// 1 define
function sayHi(name, lastname) {
    console.log(`Helllo ${name} ${lastname}`);
}
// 2 call
sayHi('John', 'Doe');
sayHi('Sorawit','Komain');

//return value ผลลัพธ์ที่ได้จากการ run function จนเสร็จ
//add(5,6) == Return Value,FN Result

function add(x,y) {
    //0sec
    let result = x + y;
    //5sec
    return result;
}
console.log(11 === add(5, 6)); //done:add(5,6) === result true

let r = add(5,6);
console.log(r);
console.log(r);

console.log(add(5,6)); //one time use
console.log(add(5,6)); //one time use


function isEven(n) {
    // if (n%2 == 0) {
    //     return true;
    // }else {
    //     return false;
    // }
    return n % 2 == 0;
}
console.log(isEven(5));
console.log(isEven(6));

//CheckPoint#1
// Declare : ประกาศเป็น
// Params : รับinput
// return : เข้าใจเรื่องreturn
// call : รับฟังก์ชั้น

//### FN EXPRESSION

let a = 5 * 2 + 7;
//Format : variable = expression

/*
expression
    single value : 7
    combine expresssion : 7 + 2
    FN result : add(7,2)
*/

let myFunc = add;
let z = console.log;
//Format : variable = FN (FN Expression)
//FN Expression : การ assign FN ให้กับ variable

console.log(myFunc(5, 2));
z('Hi'); //z = console.log;

//Anonymous FN

//SYNTAX : FN EXPRESSION
//อธิบาย : กำลัง assign Anonymous fn ให้กับตัวแปร sayHello

const sayHello = function (name) {
    console.log('Hi' + name);
};

sayHello('Expression');

// 1. function add () {}
// 2A. let add = function () {}
// 2B. let add = () =>{}

// const minus = (a, b) => {
//     return a-b;
// };

//arrow function
const minus = (a, b) => a-b;
const minusTwo = (a) => a-2;
const two = 2;

// console.log(minusTwo(5));
// console.log(two);

// console.log(minusTwo);
// console.log(two());

