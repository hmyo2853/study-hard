const clock = document.querySelector("h2#clock");

clock.innerHTML = "--"


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`
}

getClock()
// 1초마다 실행
setInterval(getClock, 1000);

// 1초 후 실행
//setTimeout(getClock, 1000)
