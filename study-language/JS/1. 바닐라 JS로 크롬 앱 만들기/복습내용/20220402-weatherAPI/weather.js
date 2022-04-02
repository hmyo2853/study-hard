// openweatherAPI 사용해보기

// 본인에게 허용된 API 키값
const API_KEY = "8ffcb0c98864d9036b50c092e7d6ac80";
function onGeoOk(userPosition){
    const lat = userPosition.coords.latitude; // 위도
    const long = userPosition.coords.longitude; //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    // 자바스크립트가 직접 응답을 요구함 promise(fetch) 이후 then으로 받음
    // json()은 API로 받은 모든 값들을 가져온다
    fetch(url).then(response => response.json()).then(data => {
        const cityContainer = document.querySelector("#weather span:first-child");
        const weatherContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerHTML = data.name;
        weatherContainer.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
    alert("Cant find your weather.")
}
// navigator 메서드로 현재 지역 정보를 가져옴 .getCurrentPosition(성공할 경우 실행 함수, 실패할 경우 실행 함수)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
