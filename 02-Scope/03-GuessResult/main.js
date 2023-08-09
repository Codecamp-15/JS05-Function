function sayHi(name) {
    let name = "Guest";
    console.log(name); // * error เพราะตัวแปรname ถูกใช้เป็นparameter ไปแล้ว ไม่สามารถประกาศซ้ำ
  }
  
  sayHi("Jim");
  