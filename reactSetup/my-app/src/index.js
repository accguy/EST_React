import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import logo from "./logo.svg";

// ../public/index.html
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  // React의 개발 모드에서만 활성화되는 유틸리티 컴포넌트
  <React.StrictMode>
    <div className="container">
      <App />
      <App />
      <App />
      <App />
      <img src={logo} alt="로고이미지" width={"300px"} />
    </div>
  </React.StrictMode>

  // React.StrictMode 의 역할
  // 1. 안전성 검사:
  // StrictMode는 React 애플리케이션에서 잠재적인 문제를 발견할 수 있도록 도와줍니다. 예를 들어, 사용되지 않는 라이프사이클 메서드나 비추천된 API 사용을 경고합니다.

  // 2. 불필요한 렌더링 감지:
  // 개발 중에는 StrictMode가 렌더링을 두 번 실행하여 컴포넌트의 부작용을 감지할 수 있습니다. 이는 컴포넌트가 예상치 않게 부작용을 일으키지 않는지 확인하는 데 도움을 줍니다.

  // 3. 경고 및 오류:
  // StrictMode는 React의 개발 도구에서 경고 및 오류를 표시하여 개발자가 문제를 조기에 식별하고 수정할 수 있도록 합니다.
);
