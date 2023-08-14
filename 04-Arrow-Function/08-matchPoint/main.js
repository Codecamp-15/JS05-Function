// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน
//เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

//TEAM : A
//Total match 38 -- You can ignore this
// win 28 => 28 *3
// Draw 5 => 5  * 1 = 5
// lose 5 => 5  * 0 -- You can ignore this
// total: 89

const totalScore = (win, draw) => win * 3 + draw;

console.log(totalScore(28, 5));
