import React from "react";

const LetterCapture = ({ onLetterSelect }) => {
  const letters = ["A", "B", "C", "D", "E"]; // Example letters

  return (
    <div>
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterSelect(letter)}
          className="letter-button"
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default LetterCapture;
