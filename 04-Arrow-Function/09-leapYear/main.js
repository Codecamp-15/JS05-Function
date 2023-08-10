// const isLeapYear = y => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

const isLeapYear = year => {
    // if (y % 4 === 0 && y % 100 !== 0) {
    //     return true;
    // } else if (y % 100 === 0 && y % 400 !== 0){
    //     return false;
    // } else if (y % 400 === 0) {
    //     return true;
    // }
////////////// #2
    // if (year % 400 === 0) {
    //     return true;
    // } else if (year % 100 === ) {
    //     return false; 
    // } else if (year % 4 === 0) {
    //     return true;
    // }

    ////////////// #3
    // if(year % 400 === 0) {
    //     return true;
    // }
    // if(year % 100 === 0) {
    //     return false;
    // }
    // if(year % 4 === 0) {
    //     return true;
    // }
    // return false;

//////////////// #4
    // if(year % 100 === 0) {
    //     return year % 400 === 0
    // }
    // return year % 4 === 0;
/////////////// #5
    return (year % 100 === 0)? year % 400 === 0 : year % 4 === 0
};

const arrowLeapYear = year => (year % 100 === 0)? year % 400 === 0 : year % 4 === 0;


    
