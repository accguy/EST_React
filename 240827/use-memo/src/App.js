import { useState, useMemo } from "react";

function payLoad() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum;
}

function App() {
  const [count, setCount] = useState(0);

  // 1. 일반 변수에 저장 시 payLoad 함수가 App이 렌더링 될때마다 실행되어
  // 이로 인해 불필요하게 자원을 많이 소모합니다.
  // const result = payLoad();

  // 2. useMemo 사용 시, 처음 렌더링 될 때는 payLoad 함수를 실행하여 계산합니다.
  // 이후에는 감시하는 값(`[]`에 명시된 값들)의 변화가 없는 한,
  // 이전에 계산된 payLoad 함수의 결과값을 재사용합니다.
  // 즉, `useMemo(() => {return 내부에있는함수()}, [])`는
  // 내부에 있는 함수를 매번 계산하지 않고, 성능을 최적화합니다.
  let result = useMemo(() => {
    return payLoad();
  }, []);

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
    </div>
  );
}
export default App;
