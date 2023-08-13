
//ใช้ if แต่ห้ามใช้ else
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }
//     return confirm("Did parents allow you?")
//   } 
// console.log(checkAge(18));


//ใช้ ? แทน if

// function checkAge(age){
//     return (age > 18) ? true : confirm("Did parents allow you?")
// }
// console.log(checkAge(11));

//ใช้ || แทน if

function checkAge(age){
    return (age > 18) || confirm("Did parents allow you?")
}
console.log(checkAge(11));