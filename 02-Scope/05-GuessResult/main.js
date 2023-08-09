let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * Hello everybody เพราะconsole.logในฟังก์ชั่น จึงใช้ค่าlocal
}

logMessage(message);
console.log(message); // **Welcome to Thailand เพราะ console.log นอกฟังก์ชั่นเท่ากับเรียกใช้ค่า global
