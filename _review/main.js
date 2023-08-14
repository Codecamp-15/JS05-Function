// Named Function
// 1. define
function sayHi(name,lastname){
    console.log(`Hello ${name} ${lastname}`);
}

// 2. Call
sayHi('john','asd');
sayHi('Champ','waruntorn');


/* Return Value */
/* add(5,6) == Return Value, FN Result */
function add(x,y){
    let result = x + y;
    return result;
    /* return คือผลลัพธ์ที่ได้จากการ run fn จนเสร็จ */

}

console.log(11 === add(5,6));

/* ผลลัพธ์แบบที่ 1 */
let r = add(5,6);   /* แบบนี้สามารถ reuse result ได้ */


/* ผลลัพธ์แบบที่ 2 */
console.log(add(5,6)); /* เป็นแบ one-time use */

/* Multiple Return */
/* มี return หลายตัวแต่จะเลือกใช้แค่ 1 แล้วจบการทำงาน */

function isEven(n){
    if (n % 2 == 0) {
        return true;
    }
    else{
        return false;
    }

    /* 
    กรณีที่ทำเป็น boolean เราสามารถ refactor ได้เช่น

    return n % 2 == 0;

    */

}

console.log(isEven(5));

/* CheckPoint 1 */
/* 
    Declare : ประกาศเป็น
    Param: รับ input
    Call function : call ได้
    Return : เข้าใจเรื่อง return
*/

/* ====================================== */
/* Function Expression */

let a = 5 * 2 + 7;
/* variable = expression */
/* 
    Expression
    สิ่งที่สามารถ evaluate เป็น single value ได้
    - single value : 7
    - combine expression : 7 + 2
    - FN result : add(7,2);
    
*/

let myFunc = add;
/* การ assign add() ให้ variable */
/* variable = FN : FN Expression*/

console.log(myFunc(5,2));

/*========================================= */

/* Anonymous FN */
/* ข้อควรระวัง คือห้ามเรียกใช้ก่อนประกาศ */
/* FN ที่ไม่มีชื่อ 
    assign anonymous FN ให้ตัวแปร
*/
const sayHello = function(value){
    console.log(`HO ${value}`);
}

sayHello('Expression');

    /* Arrow Function */
    /* เป็นวิธีที่ัสั้นกว่า */

    const minus = (a,b) => a - b;
  
/* ========================================= */






