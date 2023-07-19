// API Variables
var nutritionAPIKey = 95e7d0fbaa2c3f8adb4e92d058479d8e
var recipeAPIKey = ee23ef98a6daf89098efa5d42c0e32fc

var nutritionURL = https://trackapi.nutritionix.com/v2/natural/nutrients
var recipeURL = https://api.edamam.com/api/recipes/v2

// Function Startup, need to work on to get both APIs working

function getForecast(lat,lon) {
    var forecastUrl = ` https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
    fetch(forecastUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(data) {
            console.log('Forecast', data);
            renderFiveDay(data);
        })


function getCoordinates(){
    var cityName = document.querySelector('#city').value
    var geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`

    fetch(geoUrl)   
        .then(function(response){
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            var {lat,lon} = data[0];
            getForecast(lat,lon);
        })
        var displayCity
        displayCity = document.querySelector('#cityName')
        displayCity.textContent = cityName
}