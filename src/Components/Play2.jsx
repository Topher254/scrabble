import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
// import en from dictionary-en
import CheckWord from 'check-word';

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
    //12=4
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

  const [letters, setLetters] = useState(Array(15).fill().map(() => Array(15).fill("")));
  const [inputLetters, setInputLetters] = useState([]);
  const [isFirstInput, setIsFirstInput] = useState(true);
  const [lastPosition, setLastPosition] = useState({ row: 7, col: 7 });
  const [score, setScore] = useState(0);
  const [randomLetters, setRandomLetters] = useState([]);

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
      let inputLetter = e.target.value.toUpperCase(); // Convert to uppercase

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

      let letterValue = letterValues[inputLetter] || 0;
      const cellMultiplier = GridArray[rowIndex][colIndex].Multi;
      if (cellMultiplier === "doubleL") {
        letterValue *= 2;
      } else if (cellMultiplier === "triplel") {
        letterValue *= 3;
      }

      setLetters((prevLetters) => {
        const newLetters = prevLetters.map((row, rIdx) =>
          row.map((col, cIdx) =>
            rowIndex === rIdx && colIndex === cIdx ? inputLetter : col
          )
        );
        return newLetters;
      });

      setInputLetters((prevInputLetters) => {
        const newInputLetters = [...prevInputLetters, inputLetter];
        console.log(newInputLetters.join(""));
        return newInputLetters;
      });

      setLastPosition({ row: rowIndex, col: colIndex });
      setIsFirstInput(false);

      setScore((prevScore) => {
        const newScore = prevScore + letterValue;
        console.log(`My Score: ${newScore}`);
        return newScore;
      });

      e.target.value = "";
    }
  };

  
// console.log(letters[rowIndex][colIndex])
 
//checking the words
//I'm using checkword package to check if words are in the disctionary
  const [word,setWord] = useState('');
  const [isAvailable,setisAvailable] = useState(null);

  const handleWord = (e) =>{
    setWord(e.target.value)
  };

  const handleWordSubmit = (e)=>{
    e.preventDefault();
    if(word.trim()!==''){
      const valid = word.check(word.trim());
      setisAvailable(valid);
    }
  };
  // const words = CheckWord('en');
  
  //   const wordToCheck = 'dog'; // The static word you want to check
  //   console.log(words.check(wordToCheck))







    return (
        <div className="flex flex-col">
            {/*<div className="p-4 text-xl">Score: {score}</div>*/}
            {GridArray.map((grid, rowIndex) => (
                <div key={rowIndex}>
                    <div className="flex"
                    
                    
                    >
                        {grid.map((cell, colIndex) => {
                            
                            

                            return (
                             
                                <p
                                    onClick={() => getInput(rowIndex, colIndex)}
                                    key={colIndex}
                                    value={word}
                                    onChange={handleWordSubmit}
                                    className="h-[3.5em] w-[3.5em] bg-slate-300 border p-2 hover:cursor-pointer"
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
                                > 
                                {
                                    letters[rowIndex][colIndex]
                                  }
                                    <span
                                        className="text-[8px] flex text-white"
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
                                    </span>
                                </p>
                              
                            );
                        })}
                    </div>
  return (
    <div className="flex flex-col">
      <div className="p-4 text-xl">Score: {score}</div>
      <div className="p-4 text-xl">Random Letters: {randomLetters.join(", ")}</div>
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

                {/* Display input letter on the grid */}
                {letters[rowIndex][colIndex] && (
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-black">
                    {letters[rowIndex][colIndex]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Play2;