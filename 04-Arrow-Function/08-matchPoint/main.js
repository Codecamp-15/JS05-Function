// const scoreCalc = result => {
//     let score = 0

//     if(result == 'win') score += 3;
//     else if (result == 'draw') score += 1;
//     return `Your team now has ${score} points`;
// }

// console.log(scoreCalc('draw'))

const calMatchPoint = (win, draw) => win * 3 + draw;

