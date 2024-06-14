import React, { useEffect, useState } from "react";
const FirstDiv = () => {
  

  const [Player, setPlayer]= useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((Player) => {
        setPlayer(Player)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="   flex flex-col justify-evenly">
        

        <div className="shadow-md shadow-slate-300 p-[1em]">
          <h2 className="font-semibold p-2 text-xl text-green-600">Scores</h2>
          <div>
          {Player.map((d)=>(
            <div key={d.id}>
            <h5 className="font-semibold ">{d.username} : <span className="text-green-700 font-mono italic text-sm">{d.score}</span></h5>
            
            </div>
          ))}
             
            <h2 className="font-semibold text-xl text-green-600 py-[1em]">
              Winner
              <span className="text-[15px] min-w-[45px] p-1 bg-white text-green-400 ml-2">
                Winner
              </span>
            </h2>
          </div>
        </div>
      </div>
      {/* end of first div*/}
    </div>
  );
};

export default FirstDiv;
