import React from "react";
import Question from "./Components/Question";
import styles from "./App.module.css";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
${normalize}
span {
  color: blue;
  font-size: 120px;
}
`;

const ContentButton1 = styled.button`
  font-size: 3rem;
  padding: 30px;
  background-color: royalblue;
  color: #fff;
  border: 8px inset gray;
`;
const ContentButton2 = styled(ContentButton1)`
  border-radius: 30px;
  color: #000;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-weight: bold;
`;
const ContentButton3 = styled(ContentButton1)`
  border-radius: 45px;
  background-color: rgb(182, 234, 163);
  color: #fff;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
  font-weight: bold;
`;

const StyledButton = styled.button`
  font-size: 3rem;
  padding: 30px;
  cursor: pointer;
  transition: 0.2s;
  background-color: pink;

  color: ${(props) => {
    switch (props.color) {
      case "danger":
        return "red";
      case "peace":
        return "blue";
      default:
        return "black";
    }
  }};
  width: ${(props) => (props.fullwidth ? "100%" : "fit-content")};
  &:hover {
    transform: ${(props) =>
      props.size === "large" ? "scale(1.5)" : "scale(1.1)"};
  }
`;

const App = () => {
  for (let i = 0; i < 5; i++) {
    console.log("🚀 ~ App ~ i:", i);
  }
  const a = 3;
  console.log("🚀 ~ App ~ a:", a);

  return (
    <>
      <GlobalStyle />
      <ContentButton1>버튼1</ContentButton1>
      <ContentButton2>버튼2</ContentButton2>
      <ContentButton3>버튼3</ContentButton3>
      <StyledButton color="peace" size="large" $fullwidth>
        hello
        {/* 커스텀 props는 소문자로만 작성합니다. */}
        {/* Transient props: $로 시작하는 props는 styled components 내부에서만 사용되고 DOM 요소에는 전달되지 않습니다. */}
      </StyledButton>

      <span>span</span>
      <nav className={styles.box}>
        <ul>
          <li id="detail" className={styles.text}>
            상세정보
          </li>
          <li id="qa" className={styles.text}>
            Q&A
          </li>
        </ul>
      </nav>
      <Question />
    </>
  );
};

export default App;
