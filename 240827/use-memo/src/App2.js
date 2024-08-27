import React, { useState, useMemo, useRef, useEffect } from "react";

export default function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {}, []);

  function handleSubmit(e) {
    e.preventDefault();
    const newInfo = [...userInfo, { name, id }];
    setUserInfo(newInfo);
    console.log("Submit!");
  }

  // 모든 렌더링에 실행되는 함수입니다.
  // 현재 input의 value를 state값으로 관리하고 있기때문에
  // input 값이 바뀔때마다 해당 함수가 실행되어 자원이 낭비되고 있습니다.
  function getNum(li) {
    console.log("렌더링~~~");
    return li.length;
  }

  // 따라서 useMemo를 사용하여 유저가 추가되어 userInfo가 변경 될때:
  // userInfo 배열에 user가 추가될때에만!
  // getNum 함수가 실행되도록 하였습니다.
  const numberOfMembers = useMemo(() => {
    return getNum(userInfo);
  }, [userInfo]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />

        <input
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={(event) => setId(event.target.value)}
          value={id}
        />

        <button type="submit">회원 명부 작성</button>
      </form>

      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>이름 : {value.name}</h3>
            <strong>아이디 : {value.id}</strong>
          </li>
        ))}
      </ul>
      {/* <span>현재 회원 수 : {getNum(userInfo)}</span> */}
      <span>현재 회원 수 : {numberOfMembers}</span>
    </>
  );
}
