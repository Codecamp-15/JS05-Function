let a = function (x) {return x**2}      //exp fn

let b = (x) => x**2                     //arrow fn
// arrow fn 


let fib = x =>{
    let m = 0
    let n = 1
    let sum = 0
    
    for(let i=1;i<=x;i++){
        sum += m
        m = n
        n = sum
    }
    return sum
}


console.log(fib(8));