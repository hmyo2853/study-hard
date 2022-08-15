const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("input")
const todoUl = document.querySelector("#todoList")

const TODOS_KEY = "todos";

let todoList = [];

function addToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList))
}

function delTodo(click) {
    const parentLi = click.target.parentElement;
    parentLi.remove();
    todoList = todoList.filter(todo => todo.id !== parseInt(parentLi.id))
    addToDos();
}

function submitTodo (value){
    const todoLi = document.createElement("li");
    todoLi.id = value.id;
    const todoSpan = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = '&#9986;';
    todoSpan.innerText = value.text;
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(delBtn);
    todoUl.appendChild(todoLi)
    delBtn.addEventListener("click", delTodo)
}

function handleTodo (event) {
    event.preventDefault(); // 멈춤
    const newTodo = todoInput.value;
    const todoObj = {
        text:newTodo,
        id:Date.now()
    }
    todoInput.value = "";
    submitTodo(todoObj)
    todoList.push(todoObj)
    addToDos();
}

todoForm.addEventListener("submit", handleTodo);

const savedTodo = localStorage.getItem(TODOS_KEY);

if (savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo);
    todoList = parsedTodo;
    todoList.forEach(submitTodo)
}

