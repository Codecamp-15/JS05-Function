let celcius = 0;
let fahrenheit = +prompt("Enter Temperature in F");
let calTemp = () => {
  celcius = ((fahrenheit - 32) * 5) / 9;
  return celcius;
};

console.log(`${fahrenheit}132 fahrenheit is ${calTemp()} celcius`);
