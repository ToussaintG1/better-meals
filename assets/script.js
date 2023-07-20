// API Variables
var nutritionAPIKey = "95e7d0fbaa2c3f8adb4e92d058479d8e"
var recipeAPIKey = "ee23ef98a6daf89098efa5d42c0e32fc"

var nutritionURL = "https://trackapi.nutritionix.com/v2/natural/nutrients"
var recipeURL = "https://api.edamam.com/api/recipes/v2"

// 
fetch(nutritionURL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        //"x-app-id":"NutritionixAppID", 
        "x-app-key": nutritionAPIKey

    },
    body: JSON.stringify({
        "query": "for breakfast i ate 2 eggs, bacon, and french toast",
        "timezone": "US/Eastern"
    })
})
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log (data)
})