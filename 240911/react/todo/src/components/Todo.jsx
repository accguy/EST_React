import { useState } from "react";
import TodoView from "./TodoView";
import useTodoData from "../hooks/todoHook";

const Todo = () => {
  const [todoText, setTodoText] = useState(""); // 클라이언트에서 제어
  const [todoList, postTodo] = useTodoData(); // 서버와 통신하는 로직을 커스텀훅으로 분리

  const handleInput = (e) => {
    setTodoText(e.target.value);
  };
  const handleButton = () => {
    postTodo(todoText);
  };

  const props = { todoList, todoText, handleInput, handleButton };
  return <TodoView {...props} />;
};

export default Todo;
