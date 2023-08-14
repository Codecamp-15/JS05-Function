/* 
    *: 'Hello everybody' เพราะ logMessage() มีการ re-assign ค่า 'Hello 
    everybody' เข้าไปแทน
    **: 'Welcome to Thailand' เพราะใช้ค่า message ที่อยู่นอก function
    ***: 'John' เพราะ log ค่า name ที่อยู่นอก function 
    ****: undefined เพราะใน sayHi() ไม่มีการส่ง parameter เข้าไป ทำให้
          name = undefined เลย log ค่า name ออกมาได้ undefined

*/

