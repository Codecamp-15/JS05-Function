// {
//     //GLOBAL - SCOPE
//     let message = 'hi';

//     function sayHi() {
//         // FUNCTION SCOPE
//         let message = 'hello';
//         console.log(`##${message}`);
//     }


//     sayHi();
// console.log('scope');
// }

// variable : message = identifier
let message = 'h';
// let message = 'a';

const NUM = 5;
// const NUM =5;

var myVar = 5;
//var mVar = 10;
// function : sayHi == identifier

function sayHi(m) {
    let message = 'a';
    console.log(m);
}

{
    let message = 'Hello';
    console.log(message);// 'Hello'
}

{
    let message = 'Goodbye';
    console.log(message); // 'Goodbye'
}

for (var i = 0; i <10; i++){
    console.log(i);
}

//console.log(i+100);

let message = 'global';
{
    let message
}