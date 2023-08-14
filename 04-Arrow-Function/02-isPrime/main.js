// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function

const isPrime = (num) => {
  for (let d = 2; d < num; d++) {
    if (num % d == 0) return false;
  }
  return true;
};
console.log(isPrime(9));
