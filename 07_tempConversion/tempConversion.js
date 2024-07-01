const convertToCelsius = function (inputF) {
  let rawTempF = (inputF - 32) * .55555555555;
  let roundedTempF = Math.round(rawTempF * 10) / 10;

  return roundedTempF;
};

const convertToFahrenheit = function (inputC) {
  let rawTempC = ((inputC * 1.8) + 32);
  let roundedTempC = Math.round(rawTempC * 10) / 10;

  return roundedTempC;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
