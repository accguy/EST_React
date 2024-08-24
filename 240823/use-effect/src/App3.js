import { useState, useEffect } from "react";

// React 컴포넌트에서 상태가 변경되면 해당 컴포넌트는 전체가 다시 렌더링됩니다.
// 즉, setCalculatedDay를 호출하여 calculatedDay 상태가 변경되면,
// Time 컴포넌트 전체가 다시 렌더링되며, 컴포넌트 내의 모든 코드가 다시 실행됩니다.

// 컴포넌트 전체 렌더링: 상태가 변경되면 컴포넌트 전체가 렌더링되지만,
// 이 렌더링 과정은 리액트가 최적화하여 불필요한 DOM 업데이트를 방지합니다.
// 즉, 상태가 변경될 때만 해당 부분이 업데이트되며,
// 렌더링된 JSX 코드가 실제로 DOM에 반영되는 것은 최적화됩니다.

// 렌더링이 항상 문제는 아님: 컴포넌트가 전체적으로 렌더링되는 것은 정상입니다.
// 문제는 불필요한 상태 변경이나 효과가 반복될 때 발생합니다.
// 이를 방지하기 위해 useEffect와 같은 훅을 활용하여 렌더링을 제어합니다.

// useEffect를 사용하지 않은 경우:
// calculatedDay의 상태가 변경되고 Time컴포넌트가 다시 렌더링됨.
// setCalculatedDay가 또 실행되면서
// calculatedDay의 상태가 변경되고 Time컴포넌트가 다시 렌더링됨.
// 무한루프에 빠진다.

// useEffect를 사용한 경우:
// day값을 의존성 배열에 추가하면 처음에 컴포넌트가 렌더링 될때에만
// setCalculatedDay이 호출되어 calculatedDay값이 변경되고
// Time컴포넌트가 다시 렌더링되지만 day값의 변화가 없기때문에
// useEffect내부의 setCalculatedDay이 다시 호출되지 않는다.
// 따라서 무한루프가 해결된다.

// 결론: 컴포넌트 내부에서 바로 setState를 사용하면 무한루프에 빠질수있다.
// useEffect를 사용하여 상태가 변경되어 렌더링되는 것읋 제어하자.

const Time = () => {
  const [today, setToday] = useState(new Date());
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();

  const [calculatedDay, setCalculatedDay] = useState("");
  console.log("----");
  console.log("렌더링");

  // 의존성 배열: []
  // useEffect가 한번 실행되기 때문에
  // 타이머도 한개 생성되므로
  // 정리함수가 필요없다
  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
      console.log("setInterval 내부의 함수는 3초 지나고 처음 실행됨");
    }, 3000);
  }, []);

  // 의존성 배열: [today]
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setToday(new Date());
  //     console.log("setInterval 내부의 함수는 지정된 시간이 지나고 처음 실행");
  //   }, 3000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [today]);

  // 요일 계산
  useEffect(() => {
    switch (day) {
      case 1:
        setCalculatedDay("월");
        break;
      case 2:
        setCalculatedDay("화");
        break;
      case 3:
        setCalculatedDay("수");
        break;
      case 4:
        setCalculatedDay("목");
        break;
      case 5:
        setCalculatedDay("금");
        break;
      case 6:
        setCalculatedDay("토");
        break;
      case 7:
        setCalculatedDay("일");
        break;
    }
  }, [day]);

  return (
    <h1>
      날짜: {year}년 {month + 1}월 {date}일 {calculatedDay}요일
      <br />
      시간: {hour}시 {minute}분 {second}초
    </h1>
  );
};

const App3 = () => {
  return (
    <>
      <Time />
    </>
  );
};
export default App3;
