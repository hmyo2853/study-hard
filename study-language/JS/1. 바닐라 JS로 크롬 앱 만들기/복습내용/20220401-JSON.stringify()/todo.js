// JSON.stringify(객체) 는 들어온 객체를 무조건 String으로 바꿔준다.


const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input")
const todoUl = document.querySelector("#todo-list")

// 저장할 to do List
const todoList = [];

// localStorage에 to do list 추가
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(todoList)) // 배열에 있는 값 추가하기
}

// to do List 삭제하기
function delTodo(click) {
    const parentLi = click.target.parentElement;
    parentLi.remove()
}

// 멈춘 후에 to do List 하나씩 생성
function submitTodo (value){
    // todoInput.value 를 ul 안에 li로 추가
    const todoLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    // span 옆에 삭제버튼 생성하기
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    todoSpan.innerText = value; // span 안에 value값 추가
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(delBtn);
    todoUl.appendChild(todoLi)
    delBtn.addEventListener("click", delTodo)
}

// 처음 동작하는 함수
function handleTodo (event) {
    event.preventDefault(); // 멈춤
    const newTodo = todoInput.value;
    todoInput.value = ""; //초기화
    submitTodo(newTodo) // 받은 value 전달
    todoList.push(newTodo) // array에 추가
    saveToDos(); //로컬에 리스트 추가할 함수 호출
}

// submit 동작, submitTodo 호출
todoForm.addEventListener("submit", handleTodo)
