import DisplayTime from "./DisplayTime";
import InputTime from "./InputTime";
import ButtonContainer from "./ButtonContainer";
import { useState, useEffect, useRef } from "react";

const Timer = () => {
  // 인풋에 값이 입력이 됨.
  // 스타트 버튼을 누르면 입력값을 바탕으로 총 시간인 time(초단위)이 계산되고
  // setInterval 타이머가 시작되어 time의 값이 1초에 1씩 감소함.
  // time은 useState로 관리하여 1초마다 input의 시, 분, 초가 업데이트됨.
  // 그러면 시, 분, 초가 매초마다 업데이트되는건 비효율적이니까
  // 각각의 컴포넌트를 시, 분, 초 디스플레이로 만들어서 관리하면서
  // 시, 분, 초를 각각 스테이트로 따로 관리하는게 나을것같음.
  // 그러면 총 시간인 time이 바뀔때마다 각각의 시,분,초 state가 업데이트 되면 되겠다.
  // 그렇다면 최상위에 time을 두고 시, 분, 초도 상위에 둘까?
  // 각각의 디스플레이에서 setState로
  const [time, setTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalId = useRef(null);

  const inputHrsRef = useRef();
  const inputMinRef = useRef();
  const inputSecRef = useRef();
  const startBtnRef = useRef();
  const pauseBtnRef = useRef();
  const resetBtnRef = useRef();

  // Start
  const handleStart = () => {
    const hrsCurrentValue = +inputHrsRef.current.value;
    const minCurrentValue = +inputMinRef.current.value;
    const secCurrentValue = +inputSecRef.current.value;

    // 처음 시간을 설정할때: time이 null인 경우
    if (!time) {
      if (hrsCurrentValue < 0 || minCurrentValue < 0 || secCurrentValue < 0) {
        window.alert("음수는 입력하시면 안됩니다.");
        inputHrsRef.current.value = null;
        inputMinRef.current.value = null;
        inputSecRef.current.value = null;
        return;
      } else {
        setTime(
          hrsCurrentValue * 3600 + minCurrentValue * 60 + secCurrentValue
        );
      }
    }

    if (isPaused) {
      setIsPaused(false);
    }
    setIsRunning(true);
  };

  // Pause
  const handlePause = () => {
    setIsPaused(true);
  };
  useEffect(() => {
    console.log("isPaused:", isPaused);
    if (isPaused) {
      setIsRunning(false);
    }
  }, [isPaused]);

  // Reset
  const handleReset = () => {
    setTime(null);
    setIsRunning(false);
    inputHrsRef.current.value = null;
    inputMinRef.current.value = null;
    inputSecRef.current.value = null;
  };

  // isRunning?
  useEffect(() => {
    console.log("isRunning:", isRunning);
    if (isRunning) {
      intervalId.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }, [isRunning]);

  // Display Time
  useEffect(() => {
    if (time === 0) {
      setIsRunning(false);
      setTime(null);
    }
  }, [time]);

  return (
    <div>
      <DisplayTime time={time} />
      <InputTime
        inputHrsRef={inputHrsRef}
        inputMinRef={inputMinRef}
        inputSecRef={inputSecRef}
      />
      <ButtonContainer
        startBtnRef={startBtnRef}
        pauseBtnRef={pauseBtnRef}
        resetBtnRef={resetBtnRef}
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
        isRunning={isRunning}
        isPaused={isPaused}
        time={time}
      />
    </div>
  );
};

export default Timer;
