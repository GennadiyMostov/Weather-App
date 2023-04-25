// setTimeout(() => {
//   console.log('Two Seconds Later')
// }, 2000);

// const names = ['Genna', 'Meg', 'Maia'];

// const shortNames = names.filter((name) => {
//   return name.length <= 4
// });



// const geoCode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       lat: 0,
//       lon: 0
//     }
//     callback(data)
//   }, 3000)
// }

// geoCode('Kansas City', (anyNameYouWant) => {
//   console.log(anyNameYouWant);
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x, y, callback) => {

  setTimeout(() => {
    const addedTogether = x + y;

    callback(addedTogether);
  }, 2000)

}


add(1, 4, (sum) => {
  console.log(sum) // Should print: 5
})