const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));

const num = 7;
const result = factorial(num);
console.log(`Factorial of ${num} is ${result}`);
