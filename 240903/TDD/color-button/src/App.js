import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const newColor = color === "red" ? "blue" : "red";

  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => {
        setColor(newColor);
      }}
    >
      Change to {newColor}!
    </button>
  );
}

export default App;
