function showTemperature(response){
    
    let temp = document.querySelector("#temperatureId");
    let city = document.querySelector("#cityId");
    let description = document.querySelector("#descriptionId");
    let feelsLikeCondition = document.querySelector("#feels-like-id");
    let highCondition = document.querySelector("#high-id");
    let lowCondition = document.querySelector("#low-id");
    temp.innerHTML = Math.round(response.data.main.temp);
    city.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description;
    feelsLikeCondition.innerHTML = Math.round(response.data.main.feels_like);
    highCondition.innerHTML = Math.round(response.data.main.temp_max);
    lowCondition.innerHTML = Math.round(response.data.main.temp_min);

}


//give an weather API 
let apiKey = "60b3896c2d6cd3626ba92846df62d601";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=${apiKey}&units=metric`;

//console.log(apiUrl);
axios.get(apiUrl).then(showTemperature);