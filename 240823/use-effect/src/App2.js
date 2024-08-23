import React, { useState, useEffect } from "react";

function Time(props) {
  const [today, setToday] = useState(new Date());
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  console.log("렌더링이 됩니다!!!");

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 1000);
    console.log("🚀 ~ timer ~ timer:", timer);

    return () => {
      clearInterval(timer);
    };
  }, [today]);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Time />
    </div>
  );
}

export default App;
