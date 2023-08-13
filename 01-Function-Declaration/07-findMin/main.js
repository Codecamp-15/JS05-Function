// let x = +prompt("number1");
// let y = +prompt("number2");
// let z = +prompt("number3");
// let a = +prompt("number4");

function max(x = 0, y = 0, z = 0, a = 0) {
  if (x === 0 && y === 0 && z === 0 && a === 0) {
    return undefined;
  }
  if (isNaN(x + y + z + a)) {
    return NaN;
  }
  if (x > y && x > z && x > a) {
    return x;
  } else if (y > x && y > z && y > a) {
    return y;
  } else if (z > x && z > y && z > a) {
    let result = z;
    return result;
  } else if (a > x && a > y && a > z) {
    let result = a;
    return result;
  } else {
    let result = NaN;
    return result;
  }
}

let result = max();
console.log(result);

// function max(...array) {
//   // if (x > y && x > z && x > a) {
//   //   let result = x;
//   //   return result;
//   // } else if (y > x && y > z && y > a) {
//   //   let result = y;
//   //   return result;
//   // } else if (z > x && z > y && z > a) {
//   //   let result = z;
//   //   return result;
//   // } else if (a > x && a > y && a > z) {
//   //   let result = a;
//   //   return result;
//   // } else {
//   //   let result = NaN;
//   //   return result;
//   // }
//   con;
// }

// let result = max(3, 1, 4, 8);
// console.log(result);

// p === null || p.trim === "" || isNaN(p) || p >= 101;
