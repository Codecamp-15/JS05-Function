let userName = prompt("Enter username");
let passWord = prompt("Enter password");

function logIn(userName,passWord){
    if(userName==='admin'&&passWord==='P@ssw0rd'){
        alert("Login success");}
    else {
        alert("Invalid username or password");
    }
    
}

logIn(userName,passWord);
logIn('admin','P@ssw0rd');