import React from "react";

function Hompage({ setIsLoggedIn }) {
  const logout = () => {
    alert("로그아웃되어 로그인 페이지로 이동합니다.");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>홈페이지입니다^^</h1>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}

export default Hompage;
