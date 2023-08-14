// - ให้สร้างฟังก์ชัน login ที่มีพารามิเตอร์ 2 ตัว คือ username และ password
// - ถ้า username = “admin” และ password = “P@ssw0rd” แสดงว่า login สำเร็จ แต่ถ้าไม่ใช่แสดงว่าไม่สำเร็จ

function logIn(username, password) {
  if (username == 'admin' && password == 'P@ssw0rd') {
    // alert('login successfully')
    console.log('login successfully');
  } else {
    // alert('invalid username or password!')
    console.log('invalid username or password');
  }
}
let userName = prompt('Enter username');
let passWord = prompt('Enter Password');

logIn(userName, passWord);

// logIn('admin', 'p@ssw0rd');
