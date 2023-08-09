let x = 1;
function func() {
    console.log(x); // * 1 เพราะconsole.log ก่อนที่จะประกาศค่า x
    let x = 2;
}
func();
