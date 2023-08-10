



// IIFE  คือ ฟังชั้นประกาศมาแล้วใช้ทันที (ใช้แล้วทิ้ง) ข้อดีประหยัดMemory
(function (x,y) {console.log(x+y)})(1,2)


let a = function(x,y){
    return x+y
}

console.log(a(12,13));