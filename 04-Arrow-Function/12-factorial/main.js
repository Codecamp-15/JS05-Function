function factorial(value){
    for(let i = value - 1; i >= 1; i--){
        console.log(`${value} * ${i} = ` + value * i);
        /* console.log(value * i); */
    }
};

factorial(10);