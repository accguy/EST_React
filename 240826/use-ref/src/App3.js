import { useState, useRef } from "react";

export default function Stopwatch() {
  // 시작한 시간
  const [startTime, setStartTime] = useState(null);
  // 현재 시간
  const [now, setNow] = useState(null);
  // 진행 중인 시간(누적)
  const elapsedTimeRef = useRef(0);
  // 인터벌 함수의 id를 ref로 관리
  const intervalIdRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    if (!intervalIdRef.current) {
      intervalIdRef.current = setInterval(() => {
        setNow(Date.now());
      }, 10);
    }
  }

  function handleStop() {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
      elapsedTimeRef.current += now - startTime;
    }
  }

  function handleReset() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setStartTime(null);
    setNow(null);
    elapsedTimeRef.current = 0;
  }

  let secondsPassed = elapsedTimeRef.current / 1000;
  if (startTime !== null && now !== null) {
    secondsPassed += (now - startTime) / 1000;
    // 기본 단위가 ms이기 때문에 초단위로 표현하기 위해서 1000을 나눕니다.
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
