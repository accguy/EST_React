const TodoView = ({ todoList, todoText, handleInput, handleButton }) => {
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
