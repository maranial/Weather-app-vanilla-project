function showMonthAndDate(timestamp){
let now = new Date(timestamp);
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];
let date = now.getDate();
//console.log(`${month} ${date}`);
return `${month} ${date}`;
}

function showFahrenheitTemp(event){
    event.preventDefault(); //avoid linking to the other page when using a link tag
    //remove the active class from the celsius button
    celsiusLink.classList.remove("active-temp");
    fahrenheitLink.classList.add("active-temp");

    let fahrenheitTemp = (celsiusTemp * 9) / 5 +32;
    //alert(fahrenheitTemp);

    let temperatureCondition = document.querySelector("#temperatureId");
    temperatureCondition.innerHTML = Math.round(fahrenheitTemp);
   

}

function showCelsiusTemp(event){
    event.preventDefault(); //avoid linking to the other page when using a link tag
   
    celsiusLink.classList.add("active-temp");
    fahrenheitLink.classList.remove("active-temp");
    let temperatureCondition = document.querySelector("#temperatureId");
    temperatureCondition.innerHTML = Math.round(celsiusTemp);
}



function showTemperature(response){
    
    let temp = document.querySelector("#temperatureId");
    let city = document.querySelector("#cityId");
    let description = document.querySelector("#descriptionId");
    let feelsLikeCondition = document.querySelector("#feels-like-id");
    let highCondition = document.querySelector("#high-id");
    let lowCondition = document.querySelector("#low-id");
    let currentDate = document.querySelector("#now");
    let currentIcon = document.querySelector("#weather-icon");

    //don't need to create new variable because CelsiusTemp is a global variable, I just store it  to use it later.
    celsiusTemp = response.data.main.temp;
    feels_like_temp = response.data.main.feels_like;
    high_temp = response.data.main.temp_max;
    low_temp = response.data.main.temp_min;

    temp.innerHTML = Math.round(response.data.main.temp);
    city.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description;
    feelsLikeCondition.innerHTML = Math.round(response.data.main.feels_like);
    highCondition.innerHTML = Math.round(response.data.main.temp_max);
    lowCondition.innerHTML = Math.round(response.data.main.temp_min);
    currentDate.innerHTML = showMonthAndDate(response.data.dt * 1000);
    currentIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    currentIcon.setAttribute("alt", response.data.weather[0].description);
}

function search(city){
    //give an weather API 
    let apiKey = "60b3896c2d6cd3626ba92846df62d601";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}

search("Boston");

function showSubmit(event){
    event.preventDefault(); 
    let currentCityInput = document.querySelector("#city-input");
    //console.log(currentCityInput.value); test
    search(currentCityInput.value);

}



let form = document.querySelector("#search-form");
form.addEventListener("submit", showSubmit);

let celsiusTemp = null;
let feels_like_temp = null;
let high_temp = null;
let low_temp = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemp);

let fahrenheitFeelsLike = document.querySelector("#fahrenheit-link");
fahrenheitFeelsLike.addEventListener("click", showFahrenheitFeelsLikeTemp);

let celsiusFeelsLike = document.querySelector("#celsius-link");
celsiusFeelsLike.addEventListener("click", showCelsiusFeelsLikeTemp);

let fahrenheitHigh = document.querySelector("#fahrenheit-link");
fahrenheitHigh.addEventListener("click", showFahrenheitHighTemp);

let celsiusHigh = document.querySelector("#celsius-link");
celsiusHigh.addEventListener("click", showCelsiusHighTemp);

let fahrenheitLow = document.querySelector("#fahrenheit-link");
fahrenheitLow.addEventListener("click", showFahrenheitLowTemp);

let celsiusLow = document.querySelector("#celsius-link");
celsiusLow.addEventListener("click", showCelsiusLowTemp);


function showFahrenheitFeelsLikeTemp(event){
    event.preventDefault(); //avoid linking to the other page when using a link tag

    let fahrenheitTemp = (feels_like_temp * 9) / 5 +32;
    let feelsLikeCondition = document.querySelector("#feels-like-id");
    feelsLikeCondition.innerHTML = Math.round(fahrenheitTemp);
}

function showCelsiusFeelsLikeTemp(event){
    event.preventDefault(); //avoid linking to the other page when using a link tag

    let feelsLikeCondition = document.querySelector("#feels-like-id");
    feelsLikeCondition.innerHTML = Math.round(feels_like_temp);
}

function showFahrenheitHighTemp(event){
    event.preventDefault(); //avoid linking to the other page when using a link tag

    let fahrenheitTemp = (high_temp * 9) / 5 +32;
    let feelsLikeCondition = document.querySelector("#high-id");
    feelsLikeCondition.innerHTML = Math.round(fahrenheitTemp);
}

function showCelsiusHighTemp(event){
    event.preventDefault(); //avoid linking to the other page when using a link tag

    let feelsLikeCondition = document.querySelector("#high-id");
    feelsLikeCondition.innerHTML = Math.round(high_temp);
}

function showFahrenheitLowTemp(event){
    event.preventDefault(); //avoid linking to the other page when using a link tag

    let fahrenheitTemp = (low_temp * 9) / 5 +32;
    let feelsLikeCondition = document.querySelector("#low-id");
    feelsLikeCondition.innerHTML = Math.round(fahrenheitTemp);
}

function showCelsiusLowTemp(event){
    event.preventDefault(); //avoid linking to the other page when using a link tag

    let feelsLikeCondition = document.querySelector("#low-id");
    feelsLikeCondition.innerHTML = Math.round(low_temp);
}