import { useEffect, useState } from "react";

export interface TodoItem {
  id: string;
  todo: string;
}

const useTodoData = (): [TodoItem[], (todoText: string) => void] => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const getData = async () => {
    const res = await fetch("http://localhost:3300/todos");
    const todoData = await res.json();
    setTodoList(todoData);
  };

  useEffect(() => {
    getData();
  }, []);

  const postTodo = async (newTodo: Partial<TodoItem>): Promise<TodoItem> => {
    const res = await fetch("http://localhost:3300/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const addedTodo = await res.json();
    return addedTodo;
  };

  const addTodo = async (todoText: string): Promise<void> => {
    const newTodo = {
      todo: todoText,
    };
    const addedTodo = await postTodo(newTodo);
    setTodoList((prevTodoList) => {
      return [...prevTodoList, addedTodo];
    });
  };

  return [todoList, addTodo];
};

export default useTodoData;
