function checkAgeOne(age){
    if(age>18) return true   
    if(age<=18) return confirm("Did parents allow you?");
}

function checkAgeTwo(age){
    return age>18 ? true : confirm("Did parents allow you?")
}

function checkAgeThree(age){
    return age>18 || confirm("Did parents allow you?")
}