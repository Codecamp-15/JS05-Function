ผลลัพธ์ในบรรทัดที่มี \*, **, \*** และ \*\*\*\* มีค่าเป็นอะไรและเพราะอะไร

```js
const sender = 'Matt';

function sendTo(from, to) {
    console.log(`From ${from} to ${to}`);
}

sendTo(sender, 'Sarah'); // *
sendTo(null); // **
```

```js
const sender = 'Matt';

function sendTo(to, from = 'CC') {
    console.log(`From ${from} to ${to}`);
}

sendTo('Max'); // ***
sendTo('Ben', 'Jay'); // ****
```
