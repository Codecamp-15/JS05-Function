// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm("Did parents allow you?");
//     }
//   }

// 1.
// function checkAge(age) {
if (age > 18) {
  return true;
}
{
  return confirm("Did parents allow you?");
}

let Age = checkAge(10);
console.log(Age);

// 2.
const checkAge = (age) => (age > 18 ? true : "Did parents allow you?");

let Age = checkAge(20);
console.log(Age);

// 3.
const checkAge = (age) => {
  return age > 18 || confirm("Did parents allow you?");
};
let Age = checkAge(20);
console.log(Age);
