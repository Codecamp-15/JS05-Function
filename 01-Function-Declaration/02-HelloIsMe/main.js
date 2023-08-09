let input = prompt("Enter input") || "";

function sayHelloUser(value){      /* value ค่าที่รับเข้ามา */
    alert(`Hello ${value}`);
}

sayHelloUser(input);    /* send input ไป */
/* กรณีที่ไม่ส่งค่าไป default จะเป็น undefined */


