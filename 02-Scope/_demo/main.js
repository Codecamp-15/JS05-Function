//Scope//

{
  let message = "hi";
  function sayHi() {
    let message = "hello";
    console.log(` ## ${message}`);
  }
  sayHi();
  console.log();
}

//variable : message = identifier
let message = "h";

//function : sayHi == identifier
function sayHi() {
  let message = "a";
  console.log();
}
