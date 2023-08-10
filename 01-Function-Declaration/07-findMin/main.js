
function max(a,b,c,d){
    if(a,b,c,d ===null||a,b,c,d ==='')
    return NaN;
    else if (a>b&&a>c&&a>>d){
        return a;
    }
    else if (b>a&&b>c&&b>d){
        return b;
    }
    else if (c>a&&c>b&&c>d){
        return c;
    }
    else if (d>a&&d>b&&d>c){
        return d;
    }
    }



// console.log(max());
// console.log(max(3,1));
console.log(max(4,5,1,8));