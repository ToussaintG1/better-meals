// API Variables
var nutritionAPIKey = "95e7d0fbaa2c3f8adb4e92d058479d8e"
var recipeAPIKey = "ee23ef98a6daf89098efa5d42c0e32fc"

var nutritionURL = "https://trackapi.nutritionix.com/v2/natural/nutrients"
var recipeURL = "https://api.edamam.com/api/recipes/v2";

var x = document.getElementById("input-element");
var search = document.querySelector("#search")
var searchButton = document.querySelector("#search-button")

// Nutritionix API ID: 7f8298cc
// Edamam API ID: afa2c155

fetch(nutritionURL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "x-app-id":"7f8298cc", 
        "x-app-key": nutritionAPIKey

    },
    body: JSON.stringify({
        //"query": "for breakfast i ate 2 eggs, bacon, and french toast",
        "query": 'tofu',
        "timezone": "US/Eastern"
    })
})
.then(function(response){
    // console.log (response)
    return response.json()
})
.then(function(data){
    console.log (data)
}) 


function fetchRecipe() {
    var userInput = search.value
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${userInput}&app_id=afa2c155&app_key=ee23ef98a6daf89098efa5d42c0e32fc`)
    .then(function(response){
    console.log (response)
    return response.json()
})
.then(function(data){
    console.log (data)


})
}

searchButton.addEventListener('click', fetchRecipe)


// Recipe and Ingredients localStorage

var recipeInput = document.querySelector('#userText')
var recipeBtn = document.querySelector('#recipeBtn')
recipeBtn.addEventListener("click", function () {
    localStorage.setItem('recipe', recipeInput.value);
})
function getData() {
    document.querySelector("#userText").value = localStorage.getItem('recipe');
}
getData();


var recipeEl = document.querySelector(".saveBtn");
