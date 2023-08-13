//* 
//## การเขียนฟังก์ชั่นมี 2 แบบหลักๆ
 //1 funtion Declaration / Named Function
 //2. Function Expression / มักจะถูฏเขียนในรูปของ Anonymous Fuction


 // การใช้งานฟังงก์ชั่น
 // 1. ประกาศ => กำหนดชื่อ, input
 // 2. เรีนกใช้งาน

 // 1. Define
 function sayHi(name, lastname){
    console.log(`Hello ${name} ${lastname}`)
 }
// 2 Call 
sayHi('John', "Doe")
sayHi('Pavit', 'Pimchana')

// RETURN VALUE ผลลัพธ์ที่ได้จากการ run function จนเสร็จ
// add (5,6) == Return Value, FN Result

function add(x, y) {
    // 0 sec.
    let result = x + y;

    // กำลังทำงาน
    
    return result;
}

add(5,6); // วินาทีที่ 0 function ยัง process อยู่ 
        // ถ้าทำงานหลังจาก function Done : add (5,6) === result หรือ เมื่อ add ทำงานเสร็จตัวมันจะเท่ากับ return


let r = add (5,6);// resuseable result
console.log(r)// resuseable result เอาค่าเก็บไว้ในตัวแปร


console.log(add(5,6)) //ต่างกับข้างบนกันที่ เป็น One time use  คือถ้าจะใช้อีกต้องprocessใหม่ทั้งหมด
console.log(add(5,6)) //ต่างกับข้างบนกันที่ เป็น One time use  คือถ้าจะใช้อีกต้องprocessใหม่ทั้งหมด
console.log(add(5,6)) //ต่างกับข้างบนกันที่ เป็น One time use  คือถ้าจะใช้อีกต้องprocessใหม่ทั้งหมด


function isEven(n){
    if( n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// Checkpoint
// -Declare : ประกาศเป็น
// -Params : รับ Input 
// -Return : เข้าใจเรื่อง return
// -Call : Run function

//##### FN EXPRESSION 

let a = 5 * 2 + 7;
// variable = expression
/*
expression
- Single value : 7
- combine expression : 7 + 2
- function result : add(7,2)
*/

let myFunc = add;
let z = console.log;
//FORMAT : variable = FN (FN Expression) หรือคือการ assign Function ให้กับ variable                   



// Anonymous Function 
 
// SYSTAX : FN EXPRESSION
// อธิบาย : กำลัง Assign Anonymous fn ให้กับตัวแปร SayHello
const sayHello = function (name) {
    console.log('Hi' + name);
};

sayHello('Expression')


// 1. function add () {}
// 2A. let add = function (){}
// 2B. let add = () => {}


const minus = (a,b) => {
    return a - b;
};

// const minus = (a,b) => a - b; #### แบบย่อ 

