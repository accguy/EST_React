import { useState } from "react";

function App() {
  const [like, setLike] = useState("Like");

  function clickLike() {
    setLike(like ? null : "Like");
  }

  return (
    <div style={{ border: "solid 1px", width: "500px", textAlign: "center" }}>
      <button
        style={{
          border: "solid 1px",
          width: "500px",
          height: "200px",
          fontSize: "3rem",
        }}
        onClick={clickLike}
      >
        like
      </button>{" "}
      <span style={{ fontSize: "3rem" }}>{like}</span>
    </div>
  );
}
export default App;
