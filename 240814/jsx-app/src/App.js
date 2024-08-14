import { useState } from "react";
import "./App.css";

const TripList = () => {
  // useState를 사용하여 visited라는 상태 변수를 만듭니다.
  // 초기값은 [false, false, false, false]인 배열입니다.
  const [visited, setVisited] = useState([false, false, false, false]);

  // 여행지 리스트를 정의합니다. 각 항목은 no와 area 속성을 가집니다.
  const list = [
    { no: 1, area: "대전" },
    { no: 2, area: "부산" },
    { no: 3, area: "목포" },
    { no: 4, area: "제주도" },
  ];

  // 방문 상태를 토글하는 함수입니다.
  // index를 매개변수로 받아서 해당 인덱스의 상태를 반전시킵니다.
  const visitCheck = (index) => {
    const newVisited = [...visited]; // 현재 visited 배열을 복사합니다.
    newVisited[index] = visited[index] ? false : true;
    // visited는 직접 바꿀 수 없기 때문에 setVisited를 통해 변경합니다.
    setVisited(newVisited);
  };

  // 리스트 항목을 맵핑하여 각 항목을 JSX - li 요소로 반환합니다.
  const items = list.map((item, index) => {
    return (
      <li key={item.no} className={visited[index] ? "active" : null}>
        지역: {item.area}
        <button onClick={() => visitCheck(index)}>확인</button>
      </li>
    );
  });

  // ul 요소로 반환되는 리스트 항목들을 감싸서 반환합니다.
  return <ul className="list-area">{items}</ul>;
};

// App 컴포넌트는 TripList 컴포넌트를 렌더링합니다.
function App() {
  return <TripList />;
}

export default App;
