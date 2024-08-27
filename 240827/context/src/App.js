import React from "react";
import HelloLicat from "./components/HelloLicat";
import { UserInfo } from "./contexts/UserInfo";

function App3() {
  return (
    <div>
      <HelloLicat />
      <UserInfo.Provider value={{ name: "Jiwon", id: "졍졍" }}>
        <HelloLicat />
      </UserInfo.Provider>
    </div>
  );
}

export default App3;
