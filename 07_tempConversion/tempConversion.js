const convertToCelsius = function(far) {
  let temp = 0;
  let result = 0;
  temp = far - 32;
  result =  5/9 * temp
  let rounded = Math.round(result * 10) / 10
  return rounded;
};

const convertToFahrenheit = function(cel) {
  let temp = 0;
  let result = 0;
  temp = 9/5 * cel;
  result = temp + 32;
  let rounded = Math.round(result * 10) / 10
  return rounded;
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
