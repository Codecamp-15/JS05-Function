let leapYear = year =>{
    // if(year%4==0){
    //     if(year%100==0){
    //         if(year%400==0) return true
    //         return false
    //     }
    //     return true
    // }
    // return false
    

    return year%400==0 ? true : year%100==0 ? false : year%4==0 ? true : false
}

console.log(leapYear(1401));