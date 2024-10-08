import React, { useState } from "react";
import useInput from "./Hook/useInput";

function InputComponent() {
  const [value, onChange] = useInput("");
  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}</div>
    </>
  );
}

// function InputComponent() {
//   const [value, setValue] = useState("");
//   function onChange(e) {
//     setValue(e.target.value);
//   }
//   return (
//     <>
//       <input type="text" onChange={onChange} />
//       <div>{value}</div>
//     </>
//   );
// }

export default InputComponent;
