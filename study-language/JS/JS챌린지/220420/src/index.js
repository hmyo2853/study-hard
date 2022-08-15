const clockTitle = document.querySelector(".js-clock");
function getChristmas() {
  const christmas = new Date("December 25, 2022 00:00:00");
  const date = new Date();
  /*
  남은 기간인 remain 은 밀리초로 계산된다 => 초를 구하려면 1000을 나눠준다.
  일, 시간, 분, 초 도 밀리초로 계산하여 Math.floor해준다.
  */
  const remain = (christmas - date) / 1000;
  //하루 = 60초 * 60분 * 24시간, 남은 날짜 = remain / 하루
  const today = String(Math.floor(remain / (60 * 60 * 24)));
  //1시간 = 60초 * 60분, 남은 시간 = (remain / 시간) % 시간
  const hour = String(Math.floor((remain / (60 * 60)) % 24)).padStart(2, "0");
  //1분 = 60초, 남은 분 = (remain / 분) % 분
  const min = String(Math.floor((remain / 60) % 60)).padStart(2, "0");
  //1초 = 1000ms, 남은 초 = remain % 초 :: remain이 밀리초이기 때문에
  const sec = String(Math.floor(remain % 60)).padStart(2, "0");
  clockTitle.innerHTML = `${today}d ${hour}h ${min}m ${sec}s`;
}
getChristmas();
setInterval(getChristmas, 1000);
