function checkNumber(numberValue){
    if (numberValue % 7 == 0) {
        console.log(`${numberValue} : หาร 7 ลงตัว`)
    }
    else{
        console.log(`${numberValue} : หาร 7 ไม่ลงตัว`)
    }
}

checkNumber(7);