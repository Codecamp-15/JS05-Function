// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน
// เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

// Team: ท่าเรือใบสีฟ้า (Man city)
// Total Match : 38 [ignore]
// Win : 28 => 28*3 =84 [significant]
// Draw : 5 => 5*1 = 5 [significant]
// Lose : 5 => 5*0-0 [ignore]

// Total : 89

//abstraction
// Hiding complexity
// Easy Interact

// (win,draw)  => Total

const calMatchPoint = (win, draw) => win * 3 + draw;
