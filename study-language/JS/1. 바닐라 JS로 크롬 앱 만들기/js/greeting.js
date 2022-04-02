const formBox = document.querySelector("#inputAndButton");
const inputBox = document.querySelector("#inputAndButton input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// if saveUsername == null 일 경우에 실행되는 함수
function sendSubmit (event){
    event.preventDefault();
    formBox.classList.add(HIDDEN_CLASSNAME);
    const wroteName = inputBox.value;
    localStorage.setItem(USERNAME_KEY, wroteName);
    paintGreeting(wroteName)
}

// else 일 경우에 실행, 하지만 if submit 이후에도 실행되는 함수
function paintGreeting(string) {
    greeting.innerHTML = `Hello ${string}!`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localstorage 확인
const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    formBox.classList.remove(HIDDEN_CLASSNAME);
    formBox.addEventListener("submit", sendSubmit)
} else {
    paintGreeting(savedUsername)
}
