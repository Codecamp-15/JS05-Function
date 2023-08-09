function isPrime(num){
    if(num > 1){
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i===0) return "Not prime number"
        }
        return "Prime number"
    } else {
        return "Not prime number"
    }
}

console.log(isPrime(19))