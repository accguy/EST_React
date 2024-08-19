import { useState } from "react";
import React from "react";
import ButtonList from "./components/ButtonList";
import Display from "./components/Display";

function App() {
  const [feeling, setFeeling] = useState(null);

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
        오늘의 기분을 선택해주세요 😄
      </h1>
      <ButtonList setFeeling={setFeeling} currentFeeling={feeling} />
      <Display feeling={feeling} />
    </>
  );
}
export default App;
