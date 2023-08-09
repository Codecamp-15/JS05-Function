const isLeapYear = y => {
    let isLeapYear = true;
    
    if (y % 400 == 0 && y % 100 == 0) {
        isLeapYear = true;
        } else if(y % 4 == 0) {
            isLeapYear = true;
        } else {
            isLeapYear = false;
        }
        return isLeapYear;
    }
    
