import { useState } from "react";
import Add from "./components/Add";
import List from "./components/List";
import Counter from "./components/Counter";

function App() {
  const [data, setData] = useState([
    { name: "벨라", species: "고양이", age: "5", id: 111 },
    { name: "루시", species: "강아지", age: "3", id: 112 },
    { name: "데이지", species: "토끼", age: "2", id: 113 },
    { name: "몰리", species: "고양이", age: "1", id: 114 },
    { name: "매기", species: "강아지", age: "6", id: 115 },
  ]);
  console.log(data);

  return (
    <>
      <h1>애완동물 정보 리스트</h1>
      <Add setData={setData} />
      <List data={data} />
      <Counter />
    </>
  );
}
export default App;
