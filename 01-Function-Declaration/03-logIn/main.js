let username = prompt("Enter username")
let password = prompt("Enter password")


function login(username,password){
    if (username === 'admin' && password === 'P@ssw0rd'){
        alert('Login')
    } else {
        alert('Not login')
    }
}

login(username, password);