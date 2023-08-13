function login(username, password) {
    if (username === 'admin' && password === 'name') {
        alert('Login สำเร็จ');
    } else {
        alert('Login ไม่สำเร็จ');
    }
}

let enteredUsername = prompt('Enter username');
let enteredPassword = prompt('Enter password');

login(enteredUsername, enteredPassword);
