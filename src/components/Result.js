import React from "react";
import "./Result.css";

function Result(props) {
  const handleClick = () => {
    props.reset();
  };

  return (
    <div className="resultCard">
      <h2>Final Results</h2>
      <h2>
        {props.score} out of 5 correct - ({(props.score / 5) * 100}%)
      </h2>
      <button onClick={handleClick}>Restart</button>
    </div>
  );
}
export default Result;