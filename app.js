const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=f2b011f0801e79c0b1911e681eced009&query=Kansas City&units=f'

request({ url: url, json: true }, (err, response) => {
  console.log(response.body)
  const temp = response.body.current.temperature;
  const local = response.body.location.name;
  const precipChance = response.body.current.precip;
  console.log(
    `It is currently ${temp} degrees outside in ${local}. Chance to rain: ${precipChance}%`
  )
});
