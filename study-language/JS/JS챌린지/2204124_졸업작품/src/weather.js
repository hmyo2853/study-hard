// weather
const API_KEY = "8ffcb0c98864d9036b50c092e7d6ac80";
const cityContainer = document.querySelector("#weather span:first-child");
const weatherContainer = document.querySelector("#weather span:last-child");
function getSucess(position){
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
      cityContainer.innerHTML = data.name;
      weatherContainer.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function getFail(){
  cityContainer.innerHTML = '지역/날씨 정보를 불러오지 못했습니다.'
}
navigator.geolocation.getCurrentPosition(getSucess, getFail)