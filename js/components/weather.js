const API_KEY = "18800c3e8ae5f3ef66e5998c5f925e46";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const img = document.createElement("img");

  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      const weather = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      temp.innerText = Math.floor(jsonData.main.temp - 273.15) + "℃";
      //weather.innerText = `${jsonData.weather[0].main} / `;
      city.innerText = jsonData.name;

      weather.appendChild(img);
      weatherToIcon(img, jsonData.weather[0].icon);
    });
}

async function weatherToIcon(img, weatherIconStr) {
  const res = await fetch(
    `http://openweathermap.org/img/wn/${weatherIconStr}.png`
  );

  img.src = URL.createObjectURL(await res.blob());
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

const weather = () =>
  navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

export default weather;
