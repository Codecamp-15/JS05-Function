/*บรรทัด \*, \*\*, ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // *
console.log(sayHi(10)); // **  
```
*/

function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi(20)); // * undidifined เพราะไม่มีการกำหนดค่าใน ()
console.log(sayHi(10));//* alert => Hi kid   