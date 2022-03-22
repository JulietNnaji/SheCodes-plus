let current = new Date();
let span = document.querySelector(`#day`);
let date = current.getDate();
let hour = current.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minutes = current.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let year = current.getFullYear();
let days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thur`, `Fri`, `Sat`];
let day = days[current.getDay()];
let months = [
  `January`,
  `Febuary`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];
let month = months[current.getMonth()];
let first = document.querySelector(`#first-time`);
let second = document.querySelector(`#second-time`);
let secondTime = hour + 1;
let third = document.querySelector(`#third-time`);
let thirdTime = hour + 2;
let fourth = document.querySelector(`#fourth-time`);
let fourthTime = hour + 3;
let fifth = document.querySelector(`#fifth-time`);
let fifthTime = hour + 4;
let sixth = document.querySelector(`#sixth-time`);
let sixthTime = hour + 5;
let seventh = document.querySelector(`#seventh-time`);
let seventhTime = hour + 6;

span.innerHTML = `Today, ${date} ${month} </br> ${hour}:${minutes}`;
first.innerHTML = `${hour}:${minutes}`;
second.innerHTML = `${secondTime}:${minutes}`;
third.innerHTML = `${thirdTime}:${minutes}`;
fourth.innerHTML = `${fourthTime}:${minutes}`;
fifth.innerHTML = `${fifthTime}:${minutes}`;
sixth.innerHTML = `${sixthTime}:${minutes}`;
seventh.innerHTML = `${seventhTime}:${minutes}`;

function showWeather(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#degree").innerHTML = Math.round(
    response.data.main.temp
  );
  let thirdDegree = Math.round(response.data.main.temp);
  let thirdDegreeElement = document.querySelector("#third-degree");
  thirdDegreeElement.innerHTML = `${thirdDegree}°`;

  let fourthDegree = Math.round(response.data.main.temp);
  let fourthDegreeElement = document.querySelector("#fourth-degree");
  fourthDegreeElement.innerHTML = `${fourthDegree}°`;

  let fifthDegree = Math.round(response.data.main.temp);
  let fifthDegreeElement = document.querySelector("#fifth-degree");
  fifthDegreeElement.innerHTML = `${fifthDegree}°`;

  let sixthDegree = Math.round(response.data.main.temp);
  let sixthDegreeElement = document.querySelector("#sixth-degree");
  sixthDegreeElement.innerHTML = `${sixthDegree}°`;

  let seventhDegree = Math.round(response.data.main.temp);
  let seventhDegreeElement = document.querySelector("#seventh-degree");
  seventhDegreeElement.innerHTML = `${seventhDegree}°`;

  let eighthDegree = Math.round(response.data.main.temp);
  let eighthDegreeElement = document.querySelector("#eighth-degree");
  eighthDegreeElement.innerHTML = `${eighthDegree}°`;

  let ninthDegree = Math.round(response.data.main.temp);
  let ninthDegreeElement = document.querySelector("#ninth-degree");
  ninthDegreeElement.innerHTML = `${ninthDegree}°`;

  let humidity = response.data.main.humidity;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}%`;

  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${wind}km/h`;

  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

function searchCityButton(event) {
  event.preventDefault();
  let apiKey = "5811daf5b64e68cea2b6e393775aafa4";
  let city = document.querySelector("#search-city-button").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", searchCityButton);

function showLocation(position) {
  let apiKey = "5811daf5b64e68cea2b6e393775aafa4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

navigator.geolocation.getCurrentPosition(showLocation);

function clickButton(event) {
  navigator.geolocation.getCurrentPosition(showLocation);
}

let currentLocationButton = document.querySelector("#current");
currentLocationButton.addEventListener("click", clickButton);
