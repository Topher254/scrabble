import React, { useEffect, useState } from "react";
import axios from "axios";

const Words = ({ inputLetters, GridArray, letterValues }) => {
  const [wordExists, setWordExists] = useState(false);
  const [shiftPressed, setShiftPressed] = useState(false);
  const [selectedIndices, setSelectedIndices] = useState([]);

  // Function to calculate the score
  const calculateScore = () => {
    if (!wordExists) return 0;

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
    const sortedLetters = [...inputLetters].sort((a, b) => a.col - b.col);
    
    // Check if it's a vertical word (same column), sort by row index
    const isVertical = sortedLetters.every(({ col }, i, arr) => col === arr[0].col);

    if (isVertical) {
      sortedLetters.sort((a, b) => a.row - b.row);
    }

    return sortedLetters.map(({ letter }) => letter).join("");
  };

  const word = constructWord();

  // Check if the word exists in the dictionary
  useEffect(() => {
    if (word) {
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
          setWordExists(true);
        })
        .catch(error => {
          setWordExists(false);
        });
    } else {
      setWordExists(false);
    }
  }, [word]);

  // Event listener for Shift key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Shift") {
        // Delete selected letters from GridArray
        const updatedGridArray = [...GridArray];
        selectedIndices.forEach(index => {
          updatedGridArray[index].letter = ''; // Assuming 'letter' property exists
        });
        // Update GridArray state
        setShiftPressed(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "Shift") {
        setShiftPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [selectedIndices, GridArray]);

  // Update selected indices when inputLetters changes
  useEffect(() => {
    const indices = inputLetters.map(({ index }) => index); // Assuming 'index' property exists
    setSelectedIndices(indices);
  }, [inputLetters]);

  return (
    <div>
      <div className="text-lg text-green-600 font-bold mb-2">
        Score:<span className="text-indigo-700 ml-1">{calculateScore()}</span>
      </div>
      <div className="text-lg font-bold mb-2 text-green-600">
        Word: <span className="text-indigo-700 ml-1">{word}</span>
      </div>
      {shiftPressed && !wordExists && word && (
        <div className="text-red-600">
          Word does not exist in the dictionary.
        </div>
      )}
    </div>
  );
};

export default Words;
