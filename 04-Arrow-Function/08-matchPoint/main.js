// let point = 0

// let footballTeam = (x)=>{
//     if(x.toLowerCase()===`win`){
//         return point+=3
//     }else if(x.toLowerCase()===`draw`){
//         return point+=1
//     }
// }

// footballTeam(`Win`)
// footballTeam(`win`)
// footballTeam(`draw`)
// footballTeam(`lose`)
// console.log(point);


let Liverpool = (w,d,l) =>{
    let point = 0
    for (let i =1;i<=w;i++) point+=3
    for (let i =1;i<=d;i++) point+=1
    return point
}

console.log(Liverpool(19,10,9));