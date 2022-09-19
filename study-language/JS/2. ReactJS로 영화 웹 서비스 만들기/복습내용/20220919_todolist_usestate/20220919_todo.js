import { useState } from "react";

function App() {
  const [todo, setTodo] = useState(""); //input value
  const [todoList, setTodoList] = useState([]); // append array elements
  const onSetToDo = (event) => {
    setTodo(event.target.value)
  }
  const onSub = (event) => {
    event.preventDefault(); // stop refresh
    if (todo === "") {
      return;
    }
    setTodoList((currentArray) => [todo, ...currentArray]);
    setTodo("");
  }
  return (
    <div>
      <h1> My To Dos list ({todoList.length})</h1>
      <form onSubmit={onSub}>
        <input onChange={onSetToDo} value={todo} type="text" placeholder="Make your to do list!"/>
        <button>Add To do</button>
      </form>
      <hr />
      <ul>
        {todoList.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

