import { useState, useRef } from "react";

export default function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeRef = useRef(0);
  const intervalIdRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    if (!isRunning) {
      // 시작 시각 = 현재 시각 - 0(최초)
      // 시작 시각 = 현재 시각 - 경과된 시간
      startTimeRef.current = Date.now() - elapsedTime;
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    setIsRunning(true);
  };

  const handleStop = () => {
    clearInterval(intervalIdRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalIdRef.current);
    setElapsedTime(0);
    setIsRunning(false);
  };

  return (
    <>
      <h1>Time passed: {elapsedTime / 1000}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
