/*import React, { useState } from 'react';


const Play2 = () => {
    const [letters, setLetters] = useState(Array(255).fill(''));

    //number arrays
    const buttonIndices = [...Array(64).keys()];

    const getInput = (index) => {
        let inputLetter = prompt("Enter Your letter");
        if (inputLetter) {
            setLetters(prevLetters => {
                const newLetters = [...prevLetters];
                newLetters[index] = inputLetter;
                return newLetters;
            });
        }
    }

    const checkers=[
    
    ]

    return (
        <div className='flex flex-wrap'>
            {buttonIndices.map((index) => (
                <div className='flex flex-shrink-0 ' key={index} >
                    <button type='input' onClick={() => getInput(index)} className='bg-yellow-300 text-red-500 font-semibold flex justify-center items-center p-3 w-[2em] h-[2em] border border-green-300 '>
                        {letters[index]}
                    </button>
                </div>
            ))}

            <div>this is  a div</div>
        </div>
    );
}

export default Play2;*/

import React from "react";
import { FaStar } from "react-icons/fa";

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

  return (
    <div>
      {GridArray.map((grid, index) => (
        <div key={index}>
          <div className="flex">
            {grid.map((row, i) => (
              <p
                className="h-[3em] w-[3em] bg-slate-300 border p-2 hover:cursor-pointer"
                style={{
                  backgroundColor:
                    row.Multi === "triplew"
                      ? "Tomato"
                      : row.Multi === "doubleL"
                      ? "DeepSkyBlue"
                      : row.Multi === "triplel"
                      ? "blue"
                      : row.Multi === "doublew"
                      ? "DeepPink"
                      : row.Multi === "_"
                      ? "MediumVioletRed"
                      : "",
                }}
              >
                {row.id}
                <span
                className="text-[8px] flex text-white"
                style={{
                  visibility: row.Multi === "zero" ? "hidden" : "",
                  color: row.Multi === "_" ? "black" : "", 
                }}
              >
                {row.Multi}
                <span
                className="flex flex-row"
                  style={{
                    visibility: row.Multi !== "_" ? "hidden" : "",
                  }}
                >
                  <FaStar size={25}/>
                </span>
              </span>
              
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Play2;
