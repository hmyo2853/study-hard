// 1. form과 input을 변수로 지정해준다.
const formBox = document.querySelector("#inputAndButton");
const inputBox = document.querySelector("#inputAndButton input")

// 3. sendSubmit 함수가 호출될때 정보 event를 받아 preventDefault를 동작시키고 입력된 값을 콘솔로 출력한다.
function sendSubmit (event){
    event.preventDefault();
    const name = inputBox.value;
    console.log(name)
}

// 2. "submit" 이벤트가 있을때 sendSubmit 함수로 정보를 전달하며 호출한다.
formBox.addEventListener("submit", sendSubmit)
