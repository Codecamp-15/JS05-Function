let factorial = x =>{
    let sum =1 
    while(x>=1){
        sum*=x
        x--
    }
    return sum
}

console.log(factorial(10));