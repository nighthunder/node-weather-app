const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Host variables
hostname = '127.0.0.1'
port = '3000'

// Define paths to express config
const publicDirectoryPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './templates/views')
// const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.set("views engine", "hbs")
app.set("views", viewsPath)
// hbs.registerPartial(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) =>{
  res.render('index.hbs', {
    'title': 'Weather',
    'name': 'Maya Morais'
  })
})

app.get('/about', (req, res) =>{
  res.render('about.hbs', {
    'title': 'About me',
    'name': 'Maya Morais'
  })
})

app.get('/help', (req, res) =>{
  res.render('help.hbs', {
    'helpText': 'This is a helpfull text',
    'title': 'About me',
    'name': 'Maya Morais'
  })
})


app.get('/weather', (req, res) =>{
  
  if (!req.query.address){
    return res.send({
        error: 'Must provide a address'
    })  
  }

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) =>{
    if (error){
      return res.send({ error })
    }

    forecast(latitude, longitude, (error, forecastData) =>{
      if (error){
        return res.send({ error })
      }

      res.send({
        forecast: forecastData,
        location,
        address: req.query.address
      })

    })
  })

  // res.send({
  //     forecast: 'It\'s snowing',
  //     location: 'Philadelphia',
  //     address: req.query.address
  // })
})

app.get('/products', (req, res) =>{
  if (!req.res.query){
    // return res.send({
    //   error: 'You must specify a term to be searched'
    // })

    res.status(404).send('Sorry, we cannot find that!')
  }

  res.send({
    products: []
  })
})

app.get('/random.text', function (req, res) {
  res.send('random.text');
});

app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});

app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
