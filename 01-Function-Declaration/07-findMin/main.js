function max() {
    if (arguments.length === 0) {
      return undefined;
    }
  
    let maxValue = Number.NEGATIVE_INFINITY;
    
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== 'number') {
        return NaN;
      }
      
      if (arguments[i] > maxValue) {
        maxValue = arguments[i];
      }
    }
    
    return maxValue;
  }
  
  console.log(max()); // undefined
  console.log(max(2)); // 2
  console.log(max(3, 1)); // 3
  console.log(max(7, 3, 9, 2)); // 9
  console.log(max(5, 'hello', 8)); // NaN
  