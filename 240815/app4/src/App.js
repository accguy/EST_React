import { useState } from "react";
import Login from "./components/Login";
import Hompage from "./components/Hompage";

const user = {
  idUser: "daon",
  pwUser: 1234,
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <Hompage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login user={user} setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );

  // {
  //   if (isLoggedIn) {
  //     return <Hompage setIsLoggedIn={setIsLoggedIn} />;
  //   } else {
  //     return <Login user={user} setIsLoggedIn={setIsLoggedIn} />;
  //   }
  // }
}

export default App;
