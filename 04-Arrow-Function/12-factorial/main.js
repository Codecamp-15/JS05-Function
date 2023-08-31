const factorial = n => {
  if (n === 0 || n === 1) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
};

const num = 5; // ตัวอย่างเลขที่ต้องการหา factorial
const result = factorial(num);

console.log(`The factorial of ${num} is ${result}`);
