console.log("Client side javascript is running.")

// A promise
fetch('https://puzzle.mead.io/puzzle').then( (response) =>{
    response.json().then( (data) => {
        console.log(data)
    })
})
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const location = search.value
    
    // A promise MapBox api
    let mapbox_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?access_token=pk.eyJ1IjoibWF5YW1vIiwiYSI6ImNsNDIwZnEycjRlamgzY2w4bGo1MXM2YXUifQ.v4fSnPvGGy8SjZJLrm2r7A'
    try {
        fetch(mapbox_url).then( (response) =>{
            response.json().then( (data) => {
                console.log(data);
                if(data.features){
                    let latitude = data.features[0].center[0];
                    let longitude = data.features[0].center[1];
                    let url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + latitude + ";" + longitude + ".json?access_token=pk.eyJ1IjoibWF5YW1vIiwiYSI6ImNsNDIwZnEycjRlamgzY2w4bGo1MXM2YXUifQ.v4fSnPvGGy8SjZJLrm2r7A";
                    console.log("URL" , url)
                    fetch(url).then( (data) =>{
                        if (data.features){
                            // Make the forecast 
                        }else{
                            console.log("The features property is empty.")
                        }
                    }).catch(err => console.log(err))
                }else{
                    console.log('The features property is empty.');
                }
                // console.log("latitude", data.features[0].center[0]);
            }).catch(err => console.log('There was an error', err)) 
        })
    } catch (error) {
        // TypeError: Failed to fetch
        console.log('There was an error', error);
    }

    console.log(location)
})