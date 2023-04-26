const request = require('request');
const geocode = require('./geocode.js');


const forecast = (lat, lon, callback) => {
  const foreCastURL = `http://api.weatherstack.com/current?access_key=f2b011f0801e79c0b1911e681eced009&query=${lat},${lon}&units=f&`

  request({ url: foreCastURL, json: true }, (err, response) => {

    if (err) {
      callback('Error Retrieving Forecast Data', undefined)
    } else if (response.body.success === false) {
      callback(`${response.body.error.info}, try again.`, undefined)
    } else {
      const { location, current } = response.body
      callback(undefined, {
        location: location.name,
        region: location.region,
        temp: current.temperature,
        description: current.weather_descriptions[0],
        precip: current.precip
      })
    }
  })
}

// forecast(39.100105, -94.578142, (err, data) => {
//   console.log( data )
// })

module.exports = forecast;