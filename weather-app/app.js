const request = require('postman-request');

const url = "http://api.weatherstack.com/current?access_key=6de3b6ae166a79c608f8a9764e29b963&query=New York"
const url1 = "http://api.weatherstack.com/current?access_key=6de3b6ae166a79c608f8a9764e29b963&latitude=-37.5&longitude=120.232"
request(url1, function (error, response, body) {

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', typeof body); // Print the HTML for the Google homepage.
  data = JSON.parse(body);
  console.log('data:', data.current);
  console.log('data:', typeof data.current);

});