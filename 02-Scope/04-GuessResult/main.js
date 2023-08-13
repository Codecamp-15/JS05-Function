let x = 1;
function func() {
  console.log(x); // *
  let x = 2;
}
func();

//Error console เข้าถึง x ไม่ได้เพราะมีการประกาศตัวแปรหลัง console