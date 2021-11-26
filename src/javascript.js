let now = new Date();

let h3 = document.querySelector("h3");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let sec = now.getSeconds();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h3.innerHTML = `${day} ${date}, ${hours}:${minutes}:${sec} `;

function searchCity(city) {
  let key = "2a805289886a6cb0a6fa9785663fff97";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  axios.get(url).then(Weather);
}

searchCity("Rome");

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  searchCity(cityInput.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function Weather(response) {
  let weatherDiv = document.querySelector("#weather");
  let temperature = Math.round(response.data.main.temp);

  weatherDiv.innerHTML = ` ${temperature}°C ${response.data.name}`;
}

function showPosition(position) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Your Latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`;
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#take");
take.addEventListener("click", getCurrentPosition);
