// const min = (a, b) => {
//     if (a > b) {
//         return a
//     } else {
//         return b
//     } 
// }

const max = (a,b,c,d) => {
    let isUndef = a === undefined || b === undefined || c === undefined || d === undefined;
    if(isUndef) {
        return undefined;
    } else {
        return Math.max(a,b,c,d)}
}

max()