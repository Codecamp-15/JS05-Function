let dayToSecond = (dayValue) =>{
    let result = 0;
    result = (dayValue * 24) * 60 * 60;
    console.log(`${dayValue} day = ${result} second` );
    return result;
}

dayToSecond(1);

/* 
const HOUR_IN_DAY = 24;
const MIN_IN_DAY = 60;
const SECOND_IN_DAY = 60;
let dayToSecond = (dayValue) => dayValue * HOUR_IN_DAY * MIN_IN_DAY * SECOND_IN_DAY;

*/

