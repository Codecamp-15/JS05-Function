let user_name = prompt("Enter username") || "";
let pass_word = prompt("Enter password") || "";

function login(usernameValue,passwordValue){
    
    if (usernameValue == 'admin' && passwordValue == 'P@ssw0rd') {
        alert("Login Success!");
    }
    else{
        alert("Please try again");
    }
}

login(user_name,pass_word);