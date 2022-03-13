const API_KEY = "18800c3e8ae5f3ef66e5998c5f925e46";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const temp = Math.floor(((jsonData.main.temp - 32) * 5) / 9);
      weather.innerText = `${jsonData.weather[0].main} / ${temp}'C`;
      city.innerText = jsonData.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
