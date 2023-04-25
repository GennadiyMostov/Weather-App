const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=f2b011f0801e79c0b1911e681eced009&query=Kansas City&units=f'

// request({ url: url, json: true }, (err, response) => {
//   if (err) {
//     console.log('Error Retrieving Weather Data: ', err);
//   } else if (response.body.error) {
//     console.log('Error finding location', response.body.error)
//   } else {
//     const weatherCondition = response.body.current.weather_descriptions;
//     const temp = response.body.current.temperature;
//     const local = response.body.location.name;
//     const precipChance = response.body.current.precip;
//     console.log(
//       `It is currently ${weatherCondition[0].toLowerCase()} with a temp of ${temp} degrees outside in ${local}. Chance of rain: ${precipChance}%`
//     )
//   }

// });

const mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGFsbHlmYW45MiIsImEiOiJjbGd3cDNwd2owNjk3M2lxaXNxc2t4bmxmIn0.Ar4hacaO0YQ29bHjO7CBYA&limit=1&fuzzyMatch=false'

//request object that uses input URL, parses JSON data by setting 'json: true' so that it doesnt need to be done explicitly w/ JSON.parse(mapBoxURL)
request({url: mapBoxURL, json: true}, (err, response) => {

  if (err) {
    console.log('Error Connecting', err)
    //Error handling, Checks if no results were returned in the array of the response body property called 'features'
  } else if (response.body.features.length === 0) {
    console.log('Error Getting Your Results, Check Your Input And Try Again.')
    //Gets Lat/Lon from response body property features at center property (which is an array)
  } else {
    const lat = response.body.features[0].center[1];
    const lon = response.body.features[0].center[0];

    console.log(lat, lon)

  }
})
