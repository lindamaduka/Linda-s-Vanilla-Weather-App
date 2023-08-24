function displayTemperature(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "a5619d1cb307134b8f4771e2t2ca575o";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Enugu&key=a5619d1cb307134b8f4771e2t2ca575o&units=metric";

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
