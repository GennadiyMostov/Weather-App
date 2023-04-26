const request = require('request');


const geocode = (userInput, callback) => {
  const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(userInput)}.json?access_token=pk.eyJ1IjoicGFsbHlmYW45MiIsImEiOiJjbGd3cDNwd2owNjk3M2lxaXNxc2t4bmxmIn0.Ar4hacaO0YQ29bHjO7CBYA&limit=1`;

  request({ url: geoURL, json: true }, (err, response) => {
    if (err) {
      callback('Unable to Connect to location services', undefined)
    } else if (response.body.features.length === 0) {
      callback('Check your input and try again.', undefined)
    } else {
      callback(undefined, {
        lat: response.body.features[0].center[1],
        lon: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      })
    }
  })
};


module.exports = geocode;