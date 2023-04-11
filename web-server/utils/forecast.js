const request = require('postman-request');

const getMapboxApiForecast = (latitude, longitude, location, callback) => {

    // getting weather report from specific location from mapbox api
    // docs: https://docs.mapbox.com/api/search/geocoding/
    // https://docs.mapbox.com/
    // https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json
    // access_token=pk.eyJ1IjoibWF5YW1vIiwiYSI6ImNsNDIwZnEycjRlamgzY2w4bGo1MXM2YXUifQ.v4fSnPvGGy8SjZJLrm2r7A
  
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + latitude + ";" + longitude + ".json?access_token=pk.eyJ1IjoibWF5YW1vIiwiYSI6ImNsNDIwZnEycjRlamgzY2w4bGo1MXM2YXUifQ.v4fSnPvGGy8SjZJLrm2r7A"
    console.log("Request URL: ", url);

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
        latitude = data.features[0].center[0]
        longitude = data.features[0].center[1]
        //console.log(latitude, longitude);
        callback(undefined, "The place it's "+ data.features[0].place_name + " and is located at "+ latitude + " latitude and " + longitude + " longitude.")
      }
    });
  }
  
module.exports = getMapboxApiForecast