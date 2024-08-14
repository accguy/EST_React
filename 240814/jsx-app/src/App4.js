import React from "react";
import Licat from "./components/Licat";
import Time from "./components/Time";
import { Resume1, Resume2 } from "./components/Resume";
import ColorText from "./components/ColorText";

function App4() {
  return (
    <>
      <div>
        <Licat name="RX-78" age={10} />
        <Time />
        <Resume1
          hello="안녕하세요"
          name="아무로"
          hobby="게임"
          food="갈비"
          color="navy"
        />
      </div>
      <div>
        <ColorText color="red" />
        <ColorText color="green" />
        <ColorText color="blue" />
        <ColorText color="navy" />
        <ColorText color="#000" />
        <ColorText color="#c4c4c4" />
      </div>
    </>
  );
}

// function HelloProps(props) {
//   return (
//     <div>
//       <p>
//         my name is {props.name} and age is {props.age}
//       </p>
//       <strong>you are {props.someFunc()}</strong>
//       <p>this is someArr {[...props.someArr]}</p>
//       <p>this is someObj {props.someObj.one}</p>
//       {props.someJSX}
//     </div>
//   );
// }

// function App4() {
//   return (
//     <HelloProps
//       name="jaehyun"
//       age={25}
//       someFunc={() => "awesome!!!"}
//       someJSX={<img src="https://picsum.photos/id/237/200/300" />}
//       someArr={[1, 2, 3]}
//       someObj={{ one: 1 }}
//     />
//   );
// }

export default App4;
