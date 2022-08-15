// inputform
const userName = document.querySelector("#username")
const inputBox = userName.querySelector("input")
const helloDiv = document.querySelector("#helloBox")
const helloH2 = document.querySelector("#hello")

if (localStorage.getItem("name")){
  userName.classList.add("hidden")
  helloH2.innerHTML = `${localStorage.getItem("name")}님, 안녕하세요!`
  helloBox.classList.remove("hidden")
} else {
  function getName(event){
    event.preventDefault()
    localStorage.setItem("name", inputBox.value)
    userName.classList.add("hidden")
    helloH2.innerHTML = `${localStorage.getItem("name")}님, 안녕하세요!`
    helloBox.classList.remove("hidden")
  }
  userName.addEventListener("submit", getName)
}