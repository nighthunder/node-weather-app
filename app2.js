const express = require("express");
const hostname = '127.0.0.1';
const port = 3000;

const app = express();  

app.get('/', (req, res) => {
    // res.send("/css/index.html");
    res.send({
        "status": 200
    })
})

app.get('/weather', (req, res) => {

    if (!req.query.address){
        return res.send({
            error: 'Must provide a address'
        })  
    }

    res.send({
        forecast: 'It\'s snowing',
        location: 'Philadelphia',
        address: req.query.address
    })
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Andrew',
    },
    {
        name: 'Sarah'
    })
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });