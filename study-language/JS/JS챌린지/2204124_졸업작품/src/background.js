// change background img
const bgImg = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg"
]

const body = document.querySelector("body")

function bgChange(){
  const getNum = Math.floor(Math.random() * bgImg.length)
  body.style.backgroundImage = `url(img/${bgImg[getNum]})`
}

bgChange()