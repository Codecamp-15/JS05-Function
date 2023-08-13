let day = 365;
let year = +prompt("Enter your birth year");
let calYeartoday = () => {
  let birthyear;

  if (year <= 2020) {
    birthyear = 2020 - year;
  } else if (year >= 2020) {
    birthyear = year - 2020;
  }
  const calYeartoday = birthyear * day - 1;
  return calYeartoday;
};

console.log(calYeartoday());
