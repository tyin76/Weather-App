const apiKey = "de97900e6b3a1c994d6fb15a0d9c3751";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./images/clouds.png";
    }

    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear.png";
    }

    if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
    }
    
    if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mist.png";
    }
    
    if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rain.png";
    }
    
    if (data.weather[0].main == "Snow") {
        weatherIcon.src = "./images/snow.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";


}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

searchBox.addEventListener('keydown', (event)=> {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
})