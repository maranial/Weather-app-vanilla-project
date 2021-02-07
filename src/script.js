function showMonthAndDate(timestamp){
let now = new Date(timestamp);
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];
let date = now.getDate();
//console.log(`${month} ${date}`);
return `${month} ${date}`;
}






function showTemperature(response){
    
    let temp = document.querySelector("#temperatureId");
    let city = document.querySelector("#cityId");
    let description = document.querySelector("#descriptionId");
    let feelsLikeCondition = document.querySelector("#feels-like-id");
    let highCondition = document.querySelector("#high-id");
    let lowCondition = document.querySelector("#low-id");
    let currentDate = document.querySelector("#now");

    //don't need to create new variable because CelsiusTemp is a global variable, I just store it  to use it later.
    celsiusTemp = response.data.main.temp;

    temp.innerHTML = Math.round(response.data.main.temp);
    city.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description;
    feelsLikeCondition.innerHTML = Math.round(response.data.main.feels_like);
    highCondition.innerHTML = Math.round(response.data.main.temp_max);
    lowCondition.innerHTML = Math.round(response.data.main.temp_min);
    currentDate.innerHTML = showMonthAndDate(response.data.dt * 1000);
}


//give an weather API 
let apiKey = "60b3896c2d6cd3626ba92846df62d601";
let city = "Boston";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//console.log(apiUrl);
axios.get(apiUrl).then(showTemperature);

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

// let form = document.querySelector("");
// form.addEventListener("submit", showSubmit);

let celsiusTemp = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemp);

