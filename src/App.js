import "./App.css";
import React, { useState } from "react";

const questions = [
  {
    question: "What Is The Capital Of France?",
    answers: [
      { text: "New York", id: "m1", isRight: false },
      { text: "London", id: "m2", isRight: false },
      { text: "Paris", id: "m3", isRight: true },
      { text: "Dublin", id: "m4", isRight: false },
    ],
  },
  {
    question: "Which Country Is The Biggest In The World By Landmass?",
    answers: [
      { text: "China ", id: "m1", isRight: false },
      { text: "Russia", id: "m2", isRight: true },
      { text: "Slovenia", id: "m3", isRight: false },
      { text: "France", id: "m4", isRight: false },
    ],
  },
  {
    question: "In Which Country Do People Live The Longest?",
    answers: [
      { text: "South Korea", id: "m1", isRight: false },
      { text: "Nigeria", id: "m2", isRight: false },
      { text: "The USA", id: "m3", isRight: false },
      { text: "Japan", id: "m4", isRight: true },
    ],
  },
  {
    question: "What Country Is The Smartest In The World?",
    answers: [
      { text: "Australia", id: "m1", isRight: false },
      { text: "The USA", id: "m2", isRight: false },
      { text: "Canada", id: "m3", isRight: true },
      { text: "Mongolia", id: "m4", isRight: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [play, setPlay] = useState(true);

  const answerHandler = (isRight) => {
    if (isRight === true) {
      setScore((prevScore) => prevScore + 1);
    }
    
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setPlay(false);
    }
  };

  console.log(score);

  return (
    <div className="container">
      {play && (
        <div className="box">
          <div className="left">
            <div className="first">
              Question {currentQuestion + 1}
              <span>/{questions.length}</span>
            </div>
            <div>{questions[currentQuestion].question}</div>
          </div>
          <div className="right">
            {questions[currentQuestion].answers.map((answer) => (
              <button onClick={() => answerHandler(answer.isRight)}>
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {!play && (
        <div className="container">
          <div className="center">
            <div>Thank You For Playing.</div>
            <br />
            <div>You Scored {score} points.</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
