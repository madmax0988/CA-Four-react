import { useState } from "react";
import "./QuesitionBox.css";
import Result from "./Result";

function QuestionBox(props) {
  const [number, setNumber] = useState(0); // state for current question number
  const [Highlight, setHighlight] = useState(false); // state for whether highlight button is clicked
  const [score, setScore] = useState(0); // state for current score

  const handleClick = (e) => { // function to handle click events on options
    setNumber(number + 1); // go to the next question
    setHighlight(false); // remove highlight if there is any
    if (e.target.getAttribute('istrue') === "true") { // if the clicked option is true
      setScore(score + 1); // increment score
    }
  };

  const handleHighlight = () => { // function to handle highlight button click
    setHighlight(!Highlight); // set highlight to true
  };

  const reset = () => { // function to reset states to initial values
    setNumber(0); // go to the first question
    setHighlight(false); // remove highlight if there is any
    setScore(0); // reset score to zero
  };

  return (
    <div>
      {number < 5 ? ( // if the current question number is less than 5
        <div className="questions">
          <h2>Question: {number + 1} of 5</h2> 
          <h2 style={{ color: Highlight ? "Red" : "darkblue" }}>
            {props.data[number].text}
          </h2>
          <div className="options">
            {props.data[number].options.map((option, index) => (
              <p
                key={index}
                className= "option"
                onClick={handleClick}
                istrue={`${option.isCorrect}`} // set an attribute to indicate whether the option is correct or not
              >
                {option.text}
              </p>
            ))}
          </div>
          <div className="highLight">
            <button onClick={handleHighlight}>{Highlight ? "Remove Highlight" : "Highlight"}</button>{" "}
          </div>
        </div>
      ) : (
        <Result score={score} reset={reset} /> // if all questions are answered, show the result component
      )}
    </div>
  );
}

export default QuestionBox;