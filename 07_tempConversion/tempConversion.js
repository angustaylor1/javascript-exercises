const convertToCelsius = function(temp) {
  const celsius = (temp - 32) * (5/9) 
  let rounded = Math.round(celsius * 10) / 10
  return rounded
};

const convertToFahrenheit = function(temp) {
  const fahrenheight = (temp * (9/5)) + 32
  let rounded = Math.round(fahrenheight * 10) / 10
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
