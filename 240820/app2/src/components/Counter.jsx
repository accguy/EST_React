import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // 함수형으로 하면 preCount에 반드시 이전 count 값이 들어가게 설계됨.
    // 동기적으로 사용할수있음
    // 이전 값을 바탕으로 값이 누적되어야 되는경우에
    // 함수형 컴포넌트를 사용해서 상태를 업데이트 하자!

    // 함수형 업데이트:
    // 상태 업데이트가 여러 번 연속적으로 일어날 때,
    // 최신 상태 값(count)을 정확히 참조하여 새로운 상태를 계산할 수 있어 안전합니다.
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
  };
  const decrement = () => {
    // 직접 값 업데이트:
    // 비동기적인 상태 업데이트로 인해 상태 값이 최신 상태를 반영하지
    // 못할 수 있으며, 이는 상태 업데이트의 순서가 보장되지 않기 때문입니다.
    setCount(count - 1);
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
    </div>
  );
}

export default Counter;
