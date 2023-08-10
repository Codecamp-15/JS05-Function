let prime = x => {
    for(let i=2;i<x;i++){
        if(x%2==0){
            return `Nono`
        }else{
            return x
        }
    }
    
}

console.log(prime(12));