import React, { useEffect, useState } from "react";

function getName() {
  let a = 0;
  for (let i = 1; i < 1000000000; i++) {
    a += 1;
  }
  console.log("사실은 겁나 오래기다리는중...");
  return "개리";
}

function App() {
  // 일반 useState: 매번 getName()을 실행함
  // const [name, setName] = useState(getName());

  // lazy initialize:
  // 함수 자체를 useState()의 인자로 전달을 하면
  // 컴포넌트가 초기화 될 때 단 한번만 실행됩니다.
  const [name, setName] = useState(getName);
  const [num, setNum] = useState(0);
  return (
    <>
      <div>
        안녕하세요 {name}! 현재 숫자는{num}입니다
      </div>
      <button
        onClick={() => {
          setNum((prevNum) => prevNum + 1);
        }}
      >
        {num}
      </button>
    </>
  );
}

export default App;
