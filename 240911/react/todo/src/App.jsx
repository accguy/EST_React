import { useEffect, useState } from "react";
import "./App.css";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    { id: "q2ae", todo: "아침먹기" },
    { id: "opi9", todo: "점심먹기" },
  ]);
  const [todoText, setTodoText] = useState("");

  const handleInput = (e) => {
    setTodoText(e.target.value);
  };

  const handleButton = () => {
    setTodoList((prevTodoList) => {
      const newTodo = {
        id: +todoList[todoList.length - 1].id + 1,
        todo: todoText,
      };
      return [...prevTodoList, newTodo];
    });
  };

  return (
    <div>
      <h1>개멋진 투두</h1>
      <input type="text" value={todoText} onChange={handleInput}></input>
      <button type="button" onClick={handleButton}>
        추가
      </button>
      <ul>
        {todoList.map((todoData) => {
          return (
            <li key={todoData.id}>
              <p>{todoData.todo}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div id="App">
      <Todo />
    </div>
  );
}

export default App;
