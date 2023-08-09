const showModal = alert;
showModal("Execute modal"); // *alert คำว่า Execute modal

//////////////////

const showModal = alert();
showModal("Execute modal"); // ** error เพราะค่าของ showModal เป็น alert() เปล่าๆ
