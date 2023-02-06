const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require("./utils/forecast");

/*
geocode("Brazil", (error, data) => {
  console.log("Error: ", error);
  console.log("Data: ", data)
});

forecast("-12.35", 45.87, (error, data) => {
  console.log("Error: ", error);
  console.log("Data: ", data)
});*/

const address = process.argv[2];

if (!address){
  console.log("Please provide us a address!");
}

console.log("args", address)

geocode("Rio de Janeiro", (error, data) =>{
  console.log("Error: ", error);
  console.log("Data: ", data) 
  if (!error){
    forecast(data.latitude, data.longitude, data.location,(error, data) => {
      console.log("Error: ", error);
      console.log("Data: ", data)
    });
  }

})