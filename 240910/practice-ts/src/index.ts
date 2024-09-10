type TodoData = {
  id: string;
  todo: string;
};

// 데이터 가져오기 함수
const getData = async (): Promise<TodoData[]> => {
  const res = await fetch("http://localhost:3000/todos");
  const todoDatas = await res.json();
  return todoDatas;
};

// 데이터 추가 함수
const addData = async (todoText: string) => {
  const newTodoData: Partial<TodoData> = {
    todo: todoText,
  };
  await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodoData),
  });
};

// 리스트 추가 후 렌더링 함수
const renderAddedList = async () => {
  const $input = document.querySelector("input");
  const newTodoText: string = $input!.value;
  $input!.value = "";
  await addData(newTodoText);
  const newTodoDatas = await getData();
  renderList(newTodoDatas);
};

// 삭제 데이터 함수
const removeData = async (id: string) => {
  await fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  });
};

// 리스트 제거 후 렌더링 함수
const renderRemovedList = async (id: string) => {
  await removeData(id);
  const newTodoDatas = await getData();
  renderList(newTodoDatas);
};

// 이벤트 위임을 사용하여 클릭 이벤트 처리
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  // 삭제 버튼 클릭 시 처리
  if (target && target.classList.contains("delete-btn")) {
    const parentElement = target.parentElement;
    if (parentElement) {
      const parentId = parentElement.dataset.id as string;
      renderRemovedList(parentId);
    }
  }
});

// 리스트 항목 생성 함수
const createListItem = (todoData: TodoData) => {
  const li = document.createElement("li");
  li.dataset.id = todoData.id;

  const p = document.createElement("p");
  p.innerText = todoData.todo;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "삭제하기";
  deleteBtn.className = "delete-btn";

  li.append(p, deleteBtn);
  return li;
};

// 리스트 렌더링 함수
const renderList = (todoDatas: TodoData[]): void => {
  const $todoContainer = document.querySelector(".todo-container");
  $todoContainer!.innerHTML = "";
  todoDatas.forEach((todoData: TodoData) => {
    const newListItem = createListItem(todoData);
    $todoContainer!.append(newListItem);
  });
};

// 초기화 함수
const init = async () => {
  const todoDatas = await getData();
  renderList(todoDatas);

  // 제출 버튼 클릭 이벤트 리스너 추가
  const $submitBtn = document.querySelector(".submit-btn");
  $submitBtn!.addEventListener("click", (e) => {
    renderAddedList();
  });
};

init();
