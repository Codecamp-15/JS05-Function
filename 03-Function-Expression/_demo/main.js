console.log("Anonymous");


/* IIFE : Intermediate Invoke Function */

(function (message){
    console.log(message);
})("HI");

/* ใช้คร้ังเดียวแล้วทิ้ง จะเรียกใช้ซ้ำไม่ได้ */
/* มองก้อน () เป็น function */

(function (x,y){
    console.log(x + y);
})(5,10);

let a = (function (x,y){
    return x + y;
})(5,17);

/* เก็บ ผลลัพธ์ แต่ไม่เก็บ logic ในการทำงาน */

console.log(a);


let myFunction = function (x,y){
    return x + y;
}
/* ตัวแปร สามารถเก็บ function ได้ด้วย */
/* เรียกว่า function expression ข้อดีคือมันสามารถ block hoisting ได้ */
/* function expression คือการ assign ให่้ตัวแปร โดยจะมีชื่อหรือไม่มีชื่อก็ได้ */



/* ARROW FUNCTION */

let a1 = function (x) {return x **2;};

let b1 = (x) => x ** 2;    /* 1. ใช้ arrow */

console.log(a1(3));


let b2 = (x) => {       /* 2. ใช้ arrow แบบมี {} การใช้วิธีนี้ต้องมี return */
    let result = x + y;
    return result;
}


