import { useState, useEffect, useLayoutEffect } from "react";

function App() {
  const [value, setValue] = useState(100);

  // 컴포넌트가 렌더링 된 후에 실행됨
  // useEffect(() => {
  //   if (value >= 1000) {
  //     setValue(300);
  //   }
  // }, [value]);

  // 컴포넌트가 랜더링되기 전에 실행됨
  useLayoutEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);

  return (
    <div>
      <div
        style={{
          width: value,
          height: value,
          backgroundColor: "blue",
          transition: "1s all",
        }}
      ></div>
      <button
        onClick={() => {
          setValue(1000);
        }}
      >
        커져랏!
      </button>
      <button
        onClick={() => {
          setValue(200);
        }}
      >
        작아져랏!
      </button>
    </div>
  );
}

export default App;
