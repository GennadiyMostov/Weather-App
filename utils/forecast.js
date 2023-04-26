const request = require('request');
const geocode = require('./geocode.js');
// console.log(geocode)
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


const forecast = (lat, lon, callback) => {
  const foreCastURL = `http://api.weatherstack.com/current?access_key=f2b011f0801e79c0b1911e681eced009&query=${lat},${lon}&units=f&`
//   // console.log(foreCastURL)

  request({ url: foreCastURL, json: true }, (err, response) => {

    console.log(response.body)

    if (err) {
      callback('Error Retrieving Forecast Data', undefined)
    } else if (response.body.success === false) {
      callback(`${response.body.error.info}, try again.`, undefined)
    } else {
      callback(undefined, {
        location: response.body.location.name,
        temp: response.body.current.temperature,
        precip: `${response.body.current.precip}%`
      })
    }
  })
}


forecast(42.360253, -71.058291, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})