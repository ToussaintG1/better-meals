// API will allow users to search for recipes by diet, cuisineType and mealType
// Recipes will show up on page for user to browse
// https://api.edamam.com/api/recipes/v2?type=public&app_id=afa2c155&app_key=ee23ef98a6daf89098efa5d42c0e32fc&diet=high-protein&cuisineType=French&mealType=Lunch
// Produces 20 recipe results that user searched
// Design results page
// Show name of recipe, image, nutrition facts/description, link (for more info) and save button
// User can click on recipe of choice to bring to external link for recipe info
// User can click save button to save to favorites on recipe search

// Setup LocalStorage section
// For users to save recipe name and id in localStorage
// Setup localStorage for users to click on recipe
// Which will bring them to the detailed recipe page again


// https://api.edamam.com/api/recipes/v2/f290090ee1d6ff6871e03fe2bcc97f21?type=public&app_id=afa2c155&app_key=ee23ef98a6daf89098efa5d42c0e32fc


// API Variables
var nutritionAPIKey = "95e7d0fbaa2c3f8adb4e92d058479d8e"
var recipeAPIKey = "ee23ef98a6daf89098efa5d42c0e32fc"

var nutritionURL = "https://trackapi.nutritionix.com/v2/natural/nutrients"
var recipeURL = "https://api.edamam.com/api/recipes/v2"

var x = document.getElementById("input-element");

// Nutritionix API ID: 7f8298cc
// Edamam API ID: afa2c155

fetch(nutritionURL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "x-app-id": "7f8298cc",
        "x-app-key": nutritionAPIKey

    },
    body: JSON.stringify({
        //"query": "for breakfast i ate 2 eggs, bacon, and french toast",
        "query": x.value,
        "timezone": "US/Eastern"
    })
})
    .then(function (response) {
        console.log(response)
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })

fetch(recipeURL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "x-app-id": "afa2c155",
        "x-app-key": recipeAPIKey

    },
    body: JSON.stringify({
        //"query": "for breakfast i ate 2 eggs, bacon, and french toast",
        "query": x.value,
        "timezone": "US/Eastern"
    })
})
    .then(function (response) {
        console.log(response)
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })

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

// function recipeFunc() {
//     //let element = e.target;
//     //console.log("ELEMENT: ", element);
//     console.log("ELEMENT: ", this);
// }
