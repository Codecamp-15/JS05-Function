function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  
  const temFahrenheit = 98.6;
  const temCelsius = fahrenheitToCelsius(temFahrenheit);
  console.log(`Temperature in Celsius: ${temCelsius.toFixed(2)}`);
  