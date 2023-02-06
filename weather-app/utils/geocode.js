const request = require('postman-request');

const getWeatherStackApiReport = () =>{

// Geocoding getting weather informations from api weather stack
// https://weatherstack.com/
//const weather_stack_api_url = "http://api.weatherstack.com/current?access_key=6de3b6ae166a79c608f8a9764e29b963&query=São Paulo&units=F"
//getWeatherStackApiReport(weather_stack_api_url);
  request(url, function (error, response, body) {
  
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', typeof body); // Print the HTML for the Google homepage.
    data = JSON.parse(body);
    console.log('data:', data.current);
    console.log('data:', typeof data.current);
    console.log('Place: '+ data.request.query)
    console.log(data.current.weather_descriptions[0] + '. It\'s '+ data.current.temperature + ' degrees out. ' + 'There is a ' + data.current.precip * 100 + '% of chance of rainning out.');
    console.log("==================================================================");
  });

}

const getMapboxApiGeocode = (location, callback) => {

  // getting weather report from specific location from mapbox api
  // docs: https://docs.mapbox.com/api/search/geocoding/
  // https://docs.mapbox.com/
  // https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json
  // access_token=pk.eyJ1IjoibWF5YW1vIiwiYSI6ImNsNDIwZnEycjRlamgzY2w4bGo1MXM2YXUifQ.v4fSnPvGGy8SjZJLrm2r7A

  const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + location + ".json?access_token=pk.eyJ1IjoibWF5YW1vIiwiYSI6ImNsNDIwZnEycjRlamgzY2w4bGo1MXM2YXUifQ.v4fSnPvGGy8SjZJLrm2r7A"
  console.log("Request URL: ", url)
  request(url, function (error, response, body) {
    const data = JSON.parse(body);
    const endpoint = url.split("/")[5];
    //console.log("endpoint", endpoint);
    console.log('statusCode:', response && response.statusCode); 
    if (error){
      callback(error, undefined);
    }else if ( endpoint != "mapbox.places" && endpoint != "mapbox.places-permanent"){
      callback("Endpoint is wrong. Unable to find the location.", undefined);
    }else if (data.features.length === 0){
      callback("Search_text is wrong. Unable to find the location.", undefined)
    }else {
      //console.log('response:', body);
      latitude = data.features[0].center[0];
      longitude = data.features[0].center[1];
      location = data.features[0].place_name;
      const calldata = {
        latitude: latitude,
        longitude: longitude,
        location: location
      }
      //console.log(latitude, longitude);
      const status = "The place it's "+ location + " and is located at "+ latitude + " latitude and " + longitude + " longitude.";
      callback(undefined, calldata)
    }
  });
}

module.exports = getMapboxApiGeocode

