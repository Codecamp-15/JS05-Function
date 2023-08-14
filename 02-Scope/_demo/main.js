console.log("scope");

let message = 'Hi'
function sayHi(){
    // Function Scope
    let message = 'Hello';
    console.log(message);

}

sayHi();
console.log(message);
