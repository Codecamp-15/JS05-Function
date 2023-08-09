//////--1--//////////
function checkAge(age) {
    if (age > 19) {
        return true;
    }
    confirm("Did parents allow you?")
}

///////--2--/////////
function checkAge(age) {
    (age > 18)? true : confirm("Did parents allow you?")
}

///////--3--/////////
function checkAge(age) {
   return age > 18 || confirm("Did parents allow you?");
}