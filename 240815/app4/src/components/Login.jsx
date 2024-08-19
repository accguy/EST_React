import { useState } from "react";

function Login({ user, setIsLoggedIn }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (!id) {
      alert("아이디를 입력하지 않았습니다.");
    }
    if (!pw) {
      alert("패스워드를 입력하지 않았습니다.");
    }
    if (id !== user.idUser || +pw !== user.pwUser) {
      alert("아이디 혹은 비밀번호가 틀렸습니다.");
    }
    if (id === user.idUser && +pw === user.pwUser) {
      alert("로그인되어 홈페이지로 이동합니다.");
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLoginInput = (e) => {
    // console.log("id", e.target.value);
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    // console.log("pw", e.target.value);
    setPw(e.target.value);
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 : <input type="text" onChange={handleLoginInput} value={id} />
      </label>
      <br />
      <label>
        비밀번호 :
        <input type="password" onChange={handlePasswordInput} value={pw} />
        {/* value={pw} */}
        {/* 데이터를 컨트롤하는 권한을 리액트에게만 주었다. */}
        {/* input의 value를 변경하는 방법은 setState 뿐입니다. */}
        {/* 인풋에 값을 입력하는 것 조차도 화면의 변경이 일어나고 있는 것 */}
        {/* 따라서 그 변경방식도 리액트의 방식으로 화면을 업데이트 할수있도록 */}
        {/* 그래서 value = state 로 관리하는것이다. */}
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
