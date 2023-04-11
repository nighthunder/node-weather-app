const request = require('postman-request');

/*
const url = 'http://api.weatherstack.com/current?access_key=6de3b6ae166a79c608f8a9764e29b963&query=-23.5235295,-46.7100782';

request(url, function (error, response, body) {
  console.log('statusCode:', response && response.statusCode); 
  if (error){
    console.log('error:', error); // Print the error if one occurred
  } else {  
     // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    const data = JSON.parse(body);
    console.log("It's "+data.current.temperature+" degrees now but feels like "+data.current.feelslike)
  } 
});
*/

const geocode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/lapa.json?access_token=pk.eyJ1IjoibWF5YW1vIiwiYSI6ImNsNDIwZnEycjRlamgzY2w4bGo1MXM2YXUifQ.v4fSnPvGGy8SjZJLrm2r7A';

request(geocode, function (error, response, body){
  const data = JSON.parse(body);
  const latitude = data.features[0].center[1];
  const longitude = data.features[0].center[0];

  console.log(latitude, longitude);
})