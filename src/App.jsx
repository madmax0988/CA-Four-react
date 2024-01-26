import React, { useState } from "react";
import "./App.css";
import questions from "./questions";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [mode, setMode] = useState(false); // mode is a boolean state that determines whether the app is in dark mode or light mode
  const handleButton = () => {
    setMode(!mode);
  };
  return (
    <div
      className="backGround"
      style={{
        backgroundColor: mode ? "#A3C0EA" : "#121417",
      }}
    >
      <div className="header">
        <h1 style={{ color: mode ? "black" : "white" }}>Kalvium</h1>
        <button onClick={handleButton}>{mode ? "Dark" : "Light"}</button>
      </div>
      <QuestionBox data={questions} />
    </div>
  );
}

export default App;