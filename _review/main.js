//  fn มี2รูปแบบหลักๆ
// 1. fn declaration        / name function  คือฟังชั่นที่มีการกำหนดชื่อ
// 2. fn expression         / มักจะถูกเขียนในรูปของ anonymous fn

/* 
- การใช้งานฟังชั้น
1 ประกาศ define  => กำหนดชื่อ, กำหนดinput
2 เรียกใช้งาน call   => 
*/

// 1 Define
function sayHi(x){      //
    console.log(`hello ${x}`);
}

// 2 call
sayHi(`Jojo`)

//return value ผลลัพที่ได้จากการrun fn จนเสรจ
function add(x,y){
    let result = x+y
    return result
}
add(5,6)        // return value หรือ fn result หรือ ผลลัพจากการ run fn

let r = add(5,6)        // reuseable result

console.log(add(5,6));  //one time use
console.log(add(5,6));  //one time use




/* 
###### fn Expression 
การ assign fn ให้ variable
ex 
let myFunc = add
*/


/*
expression  สิ่งที่ evaluate เป็นsingle value
-single value :7
-combine expression :7+2
-fn result :add(7,2)
*/

/* Anonymous fn

syntax : fn expression
อธิบาย : กำลัง assign annoymouse fn ให้ตัวแปร sayHello

const sayHello(){
    console.log(`Hi)
}
sayHello()

*/



// 1. function add() {}
// 2A. let add = function () {}
// 2B. let add => () {}

// () หลังfn หมายถึงการ call function