import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Words from "./Words";

const Play2 = () => {
  const GridArray = [
    //1
    [
      { id: "", Multi: "triplew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplew" },
    ],
    //2
    [
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplel" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplel" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
    ],
    //3
    [
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
    ],
    //4
    [
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
    ],
    // 5
    [
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
    ],
    //6
    [
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplel" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplel" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplel" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplel" },
      { id: "", Multi: "zero" },
    ],
    //7
    [
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
    ],
    //8
    [
      { id: "", Multi: "triplew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "_" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplew" },
    ],
    //9=7
    [
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
    ],
    //10=6
    [
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplel" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplel" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplel" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplel" },
      { id: "", Multi: "zero" },
    ],
    //11=5
    [
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
    ],
    //12-4
    [
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
    ],
    //13=3
    [
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
    ],
    //14=2
    [
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplel" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplel" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doublew" },
      { id: "", Multi: "zero" },
    ],
    //15=1
    [
      { id: "", Multi: "triplew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplew" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "doubleL" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "zero" },
      { id: "", Multi: "triplew" },
    ],
  ];


  const letterValues = {
    A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2,
    H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1,
    O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1,
    V: 4, W: 4, X: 8, Y: 4, Z: 10
  };

  const [boardLetters, setBoardLetters] = useState(Array(15).fill().map(() => Array(15).fill(""))); 
  const [inputLetters, setInputLetters] = useState([]);
  const [randomLetters, setRandomLetters] = useState([]);
  const [isFirstInput, setIsFirstInput] = useState(true);
  const [lastPosition, setLastPosition] = useState({ row: 7, col: 7 });

  useEffect(() => {
    generateRandomLetters();
  }, []);

  const generateRandomLetters = () => {
    const Alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let letters = [];
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * Alphabets.length);
      letters.push(Alphabets.charAt(randomIndex));
    }
    setRandomLetters(letters);
  };

  const handleKeyPress = (e, rowIndex, colIndex) => {
    if (e.key === 'Enter') {
      let inputLetter = e.target.value.toUpperCase();

      if (!randomLetters.includes(inputLetter)) {
        alert("You can only enter the generated random letters.");
        e.target.value = "";
        return;
      }

      if (isFirstInput && (rowIndex !== 7 || colIndex !== 7)) {
        alert("The first input must be at the center cell (7,7).");
        e.target.value = "";
        return;
      }

      if (!isFirstInput) {
        const isValidMove =
          (rowIndex === lastPosition.row && Math.abs(colIndex - lastPosition.col) === 1) ||
          (colIndex === lastPosition.col && Math.abs(rowIndex - lastPosition.row) === 1);

        if (!isValidMove) {
          alert("You can only place the letter adjacent to the last letter (up, down, left, or right).");
          e.target.value = "";
          return;
        }
      }

      setBoardLetters((prevBoardLetters) => {
        const newBoardLetters = prevBoardLetters.map((row, rIdx) =>
          row.map((col, cIdx) =>
            rowIndex === rIdx && colIndex === cIdx ? inputLetter : col
          )
        );
        return newBoardLetters;
      });

      setInputLetters((prevInputLetters) => [...prevInputLetters, { letter: inputLetter, row: rowIndex, col: colIndex }]);

      setLastPosition({ row: rowIndex, col: colIndex });
      setIsFirstInput(false);

      e.target.value = "";
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col">
        {GridArray.map((grid, rowIndex) => (
          <div key={rowIndex}>
            <div className="flex">
              {grid.map((cell, colIndex) => (
                <div key={colIndex} className="relative">
                  <input
                    type="text"
                    maxLength={1}
                    onKeyDown={(e) => handleKeyPress(e, rowIndex, colIndex)}
                    className="h-[3.5em] w-[3.5em] bg-slate-300 border p-2 text-center"
                    style={{
                      backgroundColor:
                        cell.Multi === "triplew"
                          ? "Tomato"
                          : cell.Multi === "doubleL"
                          ? "DeepSkyBlue"
                          : cell.Multi === "triplel"
                          ? "blue"
                          : cell.Multi === "doublew"
                          ? "DeepPink"
                          : cell.Multi === "_"
                          ? "MediumVioletRed"
                          : "",
                    }}
                    tabIndex={0}
                  />
                  <div
                    className="text-[8px] absolute top-0 right-0 text-white"
                    style={{
                      visibility: cell.Multi === "zero" ? "hidden" : "",
                      color: cell.Multi === "_" ? "black" : "",
                    }}
                  >
                    {cell.Multi}
                    <span
                      className="flex flex-row"
                      style={{
                        visibility: cell.Multi !== "_" ? "hidden" : "",
                      }}
                    >
                      <FaStar size={25} />
                    </span>
                  </div>
                  {boardLetters[rowIndex][colIndex] && (
                    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-black">
                      {boardLetters[rowIndex][colIndex]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col bg-gray-200 p-4 ml-4">
        <div className="text-xl font-bold mb-4">Game Info</div>
        <div className="text-lg font-bold mb-2">Random Letters:</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {randomLetters.map((letter, index) => (
            <div
              key={index}
              className="bg-gray-200 py-2 px-4 rounded-md text-lg font-bold"
            >
              {letter}
            </div>
          ))}
        </div>
        <Words inputLetters={inputLetters} GridArray={GridArray} letterValues={letterValues} />
      </div>
    </div>
  );
};

export default Play2;