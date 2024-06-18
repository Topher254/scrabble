import React from "react";

const Words = ({ inputLetters, GridArray, letterValues }) => {
  // Function to calculate the score
  const calculateScore = () => {
    let totalScore = 0;
    let wordMultiplier = 1;

    inputLetters.forEach(({ letter, row, col }) => {
      let letterScore = letterValues[letter] || 0;
      const cell = GridArray[row][col];

      if (cell.Multi === "doubleL") {
        letterScore *= 2;
      } else if (cell.Multi === "triplel") {
        letterScore *= 3;
      } else if (cell.Multi === "doublew") {
        wordMultiplier *= 2;
      } else if (cell.Multi === "triplew") {
        wordMultiplier *= 3;
      }

      totalScore += letterScore;
    });

    return totalScore * wordMultiplier;
  };

  // Function to construct the word
  const constructWord = () => {
    if (inputLetters.length === 0) return "";

    // Assuming a horizontal word (same row), sort by column index
    const sortedLetters = inputLetters.sort((a, b) => a.col - b.col);
    
    // Check if it's a vertical word (same column), sort by row index
    const isVertical = sortedLetters.every(({ col }, i, arr) => col === arr[0].col);

    if (isVertical) {
      sortedLetters.sort((a, b) => a.row - b.row);
    }

    return sortedLetters.map(({ letter }) => letter).join("");
  };

  return (
    <div>
      <div className="text-lg text-green-600 font-bold mb-2">Score:<span className="text-indigo-700 ml-1">{calculateScore()}</span> </div>
      <div className="text-lg font-bold mb-2 text-green-600 ">Word: <span className="text-indigo-700 ml-1">{constructWord()}</span></div>
    </div>
  );
};

export default Words;
