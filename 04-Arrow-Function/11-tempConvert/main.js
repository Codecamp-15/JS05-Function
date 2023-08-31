const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

const fahrenheitTemperature = 68; // ตัวอย่างอุณหภูมิในหน่วย Fahrenheit
const celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);

console.log(`${fahrenheitTemperature} Fahrenheit is ${celsiusTemperature.toFixed(2)} Celsius`);
