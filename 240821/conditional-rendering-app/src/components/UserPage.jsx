import React from "react";

export default function UserPage({ setUserRole }) {
  return (
    <div>
      <h2>로그인된 사용자 페이지입니다.</h2>
      <button
        onClick={() => {
          setUserRole("guest");
        }}
      >
        로그아웃
      </button>
    </div>
  );
}
