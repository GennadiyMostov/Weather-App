const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const locationInput = process.argv[2];

if (locationInput === undefined) {
  return console.log('Enter A Location to see current weather information');
}

geocode(locationInput, (err, {lat, lon}) => {

  if (err) {
    return console.log(err)
  }
  forecast(lat, lon, (error, {location, region, temp, description, precip}) => {
    if (err) {
      return console.log(err)
    }
    console.log(
      `The temperature in ${location}, ${region} is currently ${temp}, ${description} with ${precip}% of rain.`
    )
    return `Temperature in ${location}, ${region} is currently ${temp}, ${description}, with ${precip}% of rain.`
  });

});






