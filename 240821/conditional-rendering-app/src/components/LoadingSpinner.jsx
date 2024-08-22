import React from "react";

export default function LoadingSpinner() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <img
        src="/dancing.gif"
        alt=""
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
}
// 지원이가 슬픈이유
// 1. 재밌는 달달한 이야기를 못들어서
// 2. 갈등이 있었는데 그냥 넘어가서
// 3. 갈등의 해결 방향이 달라서
// 4. 지워니의 기분을 느꼈는데 무시해서
// 5. 갈등의 원인이 기대하게 했다는것에 있어서
// 6. 성향이 다른거처럼 느껴져서
// 7.
