function max(a,b,c,d){
    let max = a
    if(max<b) max = b
    if(max<c) max = c
    if(max<d) max = d
    return max
}


console.log(max(10,20,5))