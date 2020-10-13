const API_KEY = "bae1076bc4c9ce19a1bd0aa7f04a7d96";
const COORDS = "coords";

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, //: latitude, 
        longitude // = longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("failed")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, )
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        //getWeather
    }
}

function init() {
    loadCoords();
}

init();