function max(num1 = 0, num2 = 0, num3 = 0, num4 = 0){
    if (num1 > num2 && num1 > num3 && num1 > num4){
        return num1;

    } else if (num2 > num1 && num2 > num3 && num2 > num4) {
        return num2;

    } else if (num3 > num1 && num3 > num2 && num3 > num4) {
        return num3;
    } else if (num4 > num1 && num4 > num2 && num4 > num3)  {
        return num4;
    }
}

console.log(max());
console.log(max(2));
console.log(max(3, 1));
console.log(max(7, 3, 9, 2));
