

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Play2 = () => {
  const GridArray = [
    //1
    [
      { id: "", Multi: "triplew",indexa:1 },
      { id: "", Multi: "zero",indexa:2 },
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

  const [Player_Input, setPlayer_Input] = useState('');

  const buttonIndex = GridArray.indexa;

  const HandlePlay = () => {
   
    const Player_s_input = prompt("Enter Letter");
    if (Player_s_input) {
      setPlayer_Input(prevLetters=>{
        const newLetter = [...prevLetters];
        newLetter[buttonIndex] = Player_s_input
        return newLetter;
        
      })
    }
  };


  return (
    <div className="flex flex-col w-[100%] h-[100%]">
      {GridArray.map((grid, index) => (
        <div key={index}>
          <div className="flex">
            {grid.map((row, i) => (
              <p 
             
              onClick={()=>HandlePlay(buttonIndex)}
                key={i}
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
              {Player_Input[index]}
              
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
                    <FaStar size={25} />
                  </span>
                </span>
                {/*<span onClick={()=>HandlePlay(index)} className="flex justify-center items-center">
                {Player_Input[index]}
                </span>
                {buttonIndex.map((index)=>(
                  <span key={index}></span>
                ))}*/}
                
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Play2;
