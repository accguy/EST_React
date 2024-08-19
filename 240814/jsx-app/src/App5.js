import React, { useState } from "react";

function App5() {
  // 어떤 변수의 값이 변경이 될때마다 화면이 렌더링이 된다면 자원의 소모가 크다.
  // 리액트에서는 useState를 통해 관리하는 변수가 업데이트 될때만 화면이 바뀐다.

  // 상태화한다: 관리해야되는 대상으로 지정하겠다.
  const [like, setLike] = useState(2);

  function clickLike() {
    setLike(like * 2); // "like++" 는 값을 직접적으로 변경하려는 것이기 때문에 안됨!!
    // like += 3;
    // X: 오로지 setLike를 통해서만 변수값을 변경할 수 있다!!
    console.log(like);
  }

  return (
    <div>
      <button onClick={() => clickLike()}>
        버튼<span> {like}</span>
      </button>
    </div>
  );
}

export default App5;
