// make clock
const clockDiv = document.querySelector("#clock")

function makeClock(){
  const getDate = new Date();
  const getHour = String(getDate.getHours()).padStart(2, "0");
  const getMin = String(getDate.getMinutes()).padStart(2, "0");
  const getSec = String(getDate.getSeconds()).padStart(2, "0");
  clockDiv.innerHTML = `${getHour}:${getMin}:${getSec}`
}
makeClock();
setInterval(makeClock, 1000)