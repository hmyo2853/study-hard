const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input")
const todoUl = document.querySelector("#todo-list")

const TODOS_KEY = "todos";

// 저장할 to do List
let todoList = [];

// localStorage에 to do list 추가
function addToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList)) // 배열에 있는 값 추가하기
}

// to do List 삭제하기
function delTodo(click) {
    const parentLi = click.target.parentElement;
    parentLi.remove();
    // to do list는 클릭해서 누름 id가 아닌 다른 id들만 남겨진 array로 재생성
    todoList = todoList.filter(todo => todo.id !== parseInt(parentLi.id))
    // delete된 array를 localStrage에 추가하는 함수 불러주기, 그렇지 않으면 localStrage가 재생성되지않음
    addToDos();
}

// 멈춘 후에 to do List 하나씩 생성
function submitTodo (value){
    // todoInput.value 를 ul 안에 li로 추가
    const todoLi = document.createElement("li");
    todoLi.id = value.id;
    const todoSpan = document.createElement("span");
    // span 옆에 삭제버튼 생성하기
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    todoSpan.innerText = value.text; // span 안에 value값 추가
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(delBtn);
    todoUl.appendChild(todoLi)
    delBtn.addEventListener("click", delTodo)
}

// 처음 동작하는 함수
function handleTodo (event) {
    event.preventDefault(); // 멈춤
    const newTodo = todoInput.value;
    const todoObj = {
        text:newTodo,
        id:Date.now()
    }
    todoInput.value = ""; //초기화
    submitTodo(todoObj) // 받은 value 전달
    todoList.push(todoObj) // array에 추가
    addToDos(); //로컬에 리스트 추가할 함수 호출
}

// submit 동작, submitTodo 호출
todoForm.addEventListener("submit", handleTodo);

const savedTodo = localStorage.getItem(TODOS_KEY);

if (savedTodo !== null) { // if localStrage에 저장된 정보가 있다면
    // JSON.stringify()로 바뀐 부분을 배열로 변경
    const parsedTodo = JSON.parse(savedTodo);
    // 항상 빈 List를 가져오기때문에 list를 저장되어있는 배열로 지정한다.
    todoList = parsedTodo;
    todoList.forEach(submitTodo) // 객체를 하나씩 넘겨주기
}

