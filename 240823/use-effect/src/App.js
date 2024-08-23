import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };
  const handleCountDown = (e) => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count % 2) {
      window.alert("count: 홀수");
    } else {
      if (count === 0) {
        return;
      }
      window.alert("count: 짝수");
    }
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
      <button onClick={handleCountDown}>Down!</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
