// 1초마다 갱신되는 시계 만들기
function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clock.innerHTML = `${hours}:${minutes}:${seconds}` //clock이라는 곳 innerHTML에 출력
}

// 브라우저 로딩되자마자 1번 실행
getClock()
// 그 후 1초마다 실행
setInterval(getClock, 1000)

// 1초 후 실행
// setTimeout(getClock, 1000)


///////////////////////////////////////////


// 1초마다 갱신되는 시계를 "1:2:9"가 아니라 "01:02:09"로 출력하기 위한 padStart 메서드 사용
// 단, string으로 출력됨 -> number는 string으로 변환 필요

//padStart, 앞에 "0"을 추가하여 글자수를 3로 만듬 => "002"
const hours = String(date.getHours()).padStart(3, "0");

//padEnd, 글자 수가 3보다 작으면 3이 될때까지 뒤에 "0"을 추가 => "200"
const hours = String(date.getHours()).padEnd(3, "0");



///////////////////////////////////////////

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000)
