// n개의 이미지 배열에서 무작위의 이미지 1개를 불러와서 출력하기
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const chooseImg = images[Math.floor(Math.random() * images.length)];

// document에 직접 element를 생성 <img src="랜덤이미지.jpg">
const bgImg = document.createElement("img");

// src 다음에 나오는 이미지 주소는 img/랜덤으로 돌린 이미지.jpg
bgImg.src = `img/${chooseImg}`

// body에 bgImg = <img src="랜덤이미지.jpg"> 추가하기
document.body.appendChild(bgImg);
