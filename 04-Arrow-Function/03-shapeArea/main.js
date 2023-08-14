// บรรทัดที่มี \* , \*\*ให้ผลลัพธ์เป็นอะไร เพราะอะไร
// ```js
// const square = (n) => {
//   n ** 2;
// };

// console.log(square(7)); // *
// ```

// ```js
// const calcCircleArea = (r) => Math.PI * r ** 2;
// console.log(calcCircleArea(3)); // **
// ```

const square = (n) => {
  n ** 2;
};
console.log(square(7)); //*

//this function will return undefined because of the bracket that wrap around
//it needs to specify the --return n **2 --
// it will return 49 right away if the brackets are remove
//example const square = (n) => n ** 2;

const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // ** return 28.274 becuse ir caulculate like (Math.PI * (r ** 2))
