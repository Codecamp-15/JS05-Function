const login = (username, password) => {
    if(username === 'admin' && password === 'P@ssw0rd') {
        alert('login successfully!!')
    } else {
        alert('failed to login..')
    }
}