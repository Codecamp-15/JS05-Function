/*บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function squareNum(num) {
  const result = num * num;
}

console.log(squareNum(2)); // *  ### undefined เพราะไม่ได้กำหนด return result
```
*/



/// แก้
function squareNum(num) {
    const result = num * num;
    return result;
  }
  
  console.log(squareNum(2, 4));