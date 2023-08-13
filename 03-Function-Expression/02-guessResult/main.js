// บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

/*```js
const showModal = alert;
showModal("Execute modal"); // * Execute modal
```

```js
const showModal = alert();
showModal("Execute modal"); // ** Error เพราะ const showModal มีการ assign FN alert ไปแล้วได้ undifined เมื่อ showModal มีการเรียกใช้ FN จึงทำให้เกิด Error
```
*/

