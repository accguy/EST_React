import React, { useState, useRef } from "react";

const App = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const emailInput = useRef(null);
  const pwInput = useRef(null);

  const inputCheck = (e) => {
    e.preventDefault();
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);
    console.log("🚀 ~ App ~ emailInput:", emailInput);
    console.log("🚀 ~ App ~ pwInput:", pwInput);
  };

  return (
    <form
      onSubmit={inputCheck}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>
        이메일 : <input type="email" ref={emailInput} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }}>
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default App;
