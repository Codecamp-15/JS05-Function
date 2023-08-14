const leapYear = (yearValue) => {

/*     if (yearValue % 400 == 0) {
        return true;
    } else if(yearValue % 100 == 0){
        return false;
    } else if(yearValue % 4 == 0){
        return true;
    }
    else{
        retuen false;
    }
    */

    if(yearValue % 400 == 0) return true;
    if(yearValue % 100 == 0) return false;
    if(yearValue % 4 == 0) return true;
    return false;

}

console.log(leapYear(2020));