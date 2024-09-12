import { useEffect, useState } from "react";

const useTodoData = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/todos")
      .then((res) => {
        return res.json();
      })
      .then((todoData) => {
        setTodoList(todoData);
      });
  }, []);

  const postTodo = (todoText) => {
    const newTodo = {
      todo: todoText,
    };

    fetch("http://localhost:3300/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => {
        return res.json();
      })
      .then((newTodo) => {
        setTodoList((prevTodoList) => {
          return [...prevTodoList, newTodo];
        });
      });
  };

  return [todoList, postTodo];
};

export default useTodoData;
