import React, { useState } from 'react';
import './FinalTest.css';

const questions = [
  {
    question: "What The Best Of Brainstorming Techniques ?",
    options: ["TRIZ", "Flipchart", "Design Thinking", "Alphabet"],
  },
  {
    question: "Which of the following is a key benefit of using version control systems?",
    options: ["Enabling visual design", "Tracking changes over time", "Speeding up internet connection", "Running antivirus software"],
  },
  {
    question: "When collaborating in Agile teams, what ceremony helps synchronize team progress daily?",
    options: ["Sprint Grooming", "Retrospective", "Daily Standup", "Pair Programming"],
  },
  {
    question: "What is the primary objective of the Kanban method in task management?",
    options: ["Reducing meeting length", "Visualizing workflow and limiting work in progress", "Generating automatic reports", "Encrypting emails"],
  },
  {
    question: "A professional email should always include which of the following?",
    options: ["GIFs", "Formal greeting and clear subject line", "Multiple font colors", "Emoticons only"],
  },
  {
    question: "Which file extension is commonly used by version control systems (like Git) to ignore files?",
    options: [".config", ".ignore", ".gitignore", ".void"],
  } 
];

const FinalTest = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState("");
  // Dummy score and timer for demo
  const totalPoints = 100;
  const achievedPoints = 25;
  const minutes = 4;
  const seconds = 55;

  const nextQuestion = () => {
    setSelected("");
    setCurrentQ((prev) => Math.min(questions.length - 1, prev + 1));
  };

  const prevQuestion = () => {
    setSelected("");
    setCurrentQ((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="final-test-container">
      <h2 className="final-test-title">Final Test</h2>
      <div className="final-test-progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      <div className="final-test-meta">
        <span>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds} Min`}</span>
        <span>{`${currentQ + 1} / ${questions.length} Questions`}</span>
        <span>{`${achievedPoints} Points`}</span>
      </div>
      <div className="final-test-card">
        <p className="final-test-sub">Choose the one correct answer</p>
        <h3 className="final-test-question">{questions[currentQ].question}</h3>
        <div className="options-grid">
          {questions[currentQ].options.map((option, index) => (
            <label
              key={index}
              className={`option ${selected === option ? 'selected' : ''}`}
            >
              <input
                type="radio"
                name={`q${currentQ}`}
                value={option}
                checked={selected === option}
                onChange={() => setSelected(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      <div className="final-test-actions">
        <button
          onClick={prevQuestion}
          disabled={currentQ === 0}
          className="btn-outline"
        >
          Previous Question
        </button>
        <button
          onClick={nextQuestion}
          disabled={currentQ === questions.length - 1}
          className="btn-primary"
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default FinalTest;
