import { TodoItem } from "../hooks/todoHook";
import { ChangeEvent } from "react";

interface TodoViewProps {
  todoList: TodoItem[];
  todoText: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleButton: () => void;
}

// 1. React.FC가 무엇인가?
// 함수형 컴포넌트에 대한 타입을 지정하는 데 사용되며,
// 컴포넌트의 Props 타입을 제네릭으로 전달할 수 있습니다.
// 해당 TodoView 컴포넌트가 특정한 구조의 Props를 받도록 강제합니다.
// 불필요한 children을 포함하게 되므로 최근에는 명시적으로 Props 타입을 지정하는 방법이 더 선호됩니다.

// const TodoView:React.FC<TodoViewProps> = ({
//   todoList,
//   todoText,
//   handleInput,
//   handleButton,
// }) => {//}

// 2. 명시적 타입 정의
// TodoViewProps를 명시적으로 지정하여 Props의 타입을 쉽게 이해할 수 있습니다.
const TodoView = ({
  todoList,
  todoText,
  handleInput,
  handleButton,
}: TodoViewProps) => {
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

export default TodoView;
