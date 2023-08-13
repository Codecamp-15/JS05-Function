function login(username, password) {
  if (username === "admin" && password === "P@ssw0rd") {
    alert("login success");
  } else alert("login failed");
}

let username = prompt("enter username");
let password = prompt("enter password");

login(username, password);
