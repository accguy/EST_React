import DisplayTime from "./DisplayTime";
import InputTime from "./InputTime";
import ButtonContainer from "./ButtonContainer";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const TimerDiv = styled.div`
  background-image: linear-gradient(
    135deg,
    #5572bb,
    #374b7c
  ); // 0deg: 12시, 시계방향
  width: 400px;
  height: 360px;
  border-radius: 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

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

    if (hrsCurrentValue < 0 || minCurrentValue < 0 || secCurrentValue < 0) {
      window.alert("음수는 입력하시면 안됩니다.");
      setTime(null);

      // 음수가 입력된 경우 인풋 필드 초기화
      inputHrsRef.current.value = "00";
      inputMinRef.current.value = "00";
      inputSecRef.current.value = "00";
      return;
    } else {
      setTime(hrsCurrentValue * 3600 + minCurrentValue * 60 + secCurrentValue);
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
    // 인풋 필드 초기화
    inputHrsRef.current.value = "00";
    inputMinRef.current.value = "00";
    inputSecRef.current.value = "00";

    setTime(null);
    setIsRunning(false);
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

  // time
  useEffect(() => {
    if (time === 0) {
      setIsRunning(false);
      setTime(null);

      // 이미 time이 null일때 reset버튼을 누르거나
      // 음수를 입력해도 time값이 null로 그대로이기 때문에
      // useEffect가 실행되지 않아서 0읋 렌더링이 안됨
      // => 그냥 인풋값을 직접 "00"으로 초기화해주면됨.

      setTimeout(() => {
        // <setTimeout 안에 alert를 넣은 이유>
        //
        // 동기적인 코드(alert)는 time이 0으로 바뀌자마자 바로 실행되기 때문에,
        // React가 0을 화면에 렌더링하기 전에 alert이 먼저 뜨게 됩니다.
        // 이 때문에 화면에 1초가 남은 상태로 표시된 상태에서 alert이 실행됩니다.
        //
        // setTimeout은 비동기 함수로, 콜백 함수를 이벤트 루프에 넣어 두고,
        // 현재 실행 중인 코드가 모두 완료된 후에 실행합니다.
        // 따라서 setTimeout 안에 alert을 넣으면, React가 화면을 0으로 렌더링한 후에 alert이 실행됩니다.
        alert("Finish!");
      }, 10);
    }

    // typeof(null/30) = number
    const hour = Math.floor(time / 3600);
    const min = Math.floor((time % 3600) / 60);
    const sec = Math.floor(time % 60);

    inputHrsRef.current.value = String(hour).padStart(2, "0");
    inputMinRef.current.value = String(min).padStart(2, "0");
    inputSecRef.current.value = String(sec).padStart(2, "0");
  }, [time]);

  return (
    <TimerDiv>
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
    </TimerDiv>
  );
};

export default Timer;
