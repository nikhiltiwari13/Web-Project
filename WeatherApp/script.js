const btn = document.querySelector("button");
const inputBtn = document.querySelector("input");
const weatherIcon = document.querySelector(".icon")

const API_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "ebf6e7542a0c8bde2b628370c49a143f"

btn.addEventListener("click", async() => {
    const city = inputBtn.value;
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        let jsonRes = await response.json()
        document.querySelector(".city").innerHTML = jsonRes.name
        document.querySelector(".humidity").innerHTML = jsonRes.main.humidity + "%"
        document.querySelector(".temp").innerHTML = Math.round(jsonRes.main.temp) + "&deg;c"
        document.querySelector(".wind").innerHTML = jsonRes.wind.speed + " km/h"

        if(jsonRes.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if(jsonRes.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(jsonRes.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
        else if(jsonRes.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }
        else if(jsonRes.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }
        else if(jsonRes.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png"
        }

        document.querySelector(".error").style.display = "none"
        document.querySelector(".weather").style.display = "block"
    }
    
})