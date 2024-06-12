import React from "react";
import imagee from "../assets/image.jpeg";
import Letters from "./Letters";
const FirstDiv = () => {
  return (
    <div>
      <div className="   flex flex-col justify-evenly">
        

        <div className="shadow-md shadow-slate-300 p-[1em]">
          <h2 className="font-semibold p-2 text-xl text-green-600">Scores</h2>
          <div>
            <ul className="pl-2">
              <li className="flex items-center">
                <img src={imagee} className="w-10 mr-2 rounded-full" />
                Player1{" "}
                <span className="pl-2">
                  Score
                  <a className="ml-1  p-2 bg-white text-green-600 ">56</a>
                </span>
              </li>
              <li className="flex items-center">
                <img src={imagee} className="w-10 mr-2 rounded-full" />
                Player1{" "}
                <span className="pl-2">
                  Score
                  <a className="ml-1  p-2 bg-white text-green-600 ">65</a>
                </span>
              </li>
              <li className="flex items-center">
                <img src={imagee} className="w-10 mr-2 rounded-full" />
                Player1{" "}
                <span className="pl-2">
                  Score
                  <a className="ml-1  p-2 bg-white text-green-600 ">32</a>
                </span>
              </li>
            </ul>
            <h2 className="font-semibold text-xl py-[1em]">
              Winner
              <span className="text-[15px] min-w-[45px] p-1 bg-white text-green-600 ml-2">
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
