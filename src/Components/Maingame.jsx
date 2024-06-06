import React from "react";
import imagee from "../assets/image.jpeg";
import { GiBullets } from "react-icons/gi";
import { FaAngleDown, FaBars } from "react-icons/fa";
import Play from "./Play";
import Play2 from "./Play2";
import GridCell from "./GridCell";
import Letters from "./Letters";

const Maingame = () => {
  return (
    <div className="bg-[url(imagee)] shadow-md shadow-green-650 px-[1em] py-[1em] mx-[4em] my-[4em] min-h-[60%] flex flex-col ">
      <div className="flex justify-between ">
        <div>
          <a className="bg-green-700 flex justify-center items-center text-white p-2 rounded">
            Level
            <span>
              <FaAngleDown
                className="ml-2 hover:text-yellow-600 hover:cursor-pointer"
                size={20}
              />
            </span>
          </a>
        </div>
        <div>
          <a className="bg-green-700 flex justify-center items-center text-white p-2 rounded">
            Menu
            <span>
              <FaBars
                className="ml-2 hover:text-yellow-600 hover:cursor-pointer"
                size={20}
              />
            </span>
          </a>
        </div>
      </div>
      {/*inside flex div */}
      <div className="py-[1em] flex flex-col justify-center">
        <div className="bg-green-600 px-[2em] text-white flex flex-col justify-evenly">
          <div>
            <h2 className="font-semibold p-2 text-xl">Scores</h2>
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
          <div>
            <h1 className="font-semibold p-2 text-xl">Letters</h1>
            <div className="pl-2 py-2">
            {/*Display of the random letters */}
              <div><Letters/></div>
              
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Play2 className='flex' />
        </div>
        <div className="bg-green-600 px-[2em] text-white flex flex-col justify-evenly">
          <div>
            <h2 className="font-semibold p-2 ">Players Online</h2>
            <div>
              <ul className="pl-2">
                <li className="flex items-center">
                  <img src={imagee} className="w-10 mr-2 rounded-full" />
                  Player1
                </li>
                <li className="flex items-center">
                  <img src={imagee} className="w-10 mr-2 rounded-full" />
                  Player1
                </li>
                <li className="flex items-center">
                  <img src={imagee} className="w-10 mr-2 rounded-full" />
                  Player1
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="font-semibold p-2">Comments</h1>
            <div className="pl-2">
              <p>Comment1</p>
              <p>Comment2</p>
              <p>Comment3</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <a className="bg-green-700 flex justify-center items-center text-white p-2 rounded">
            Time
          </a>
          <p className="px-2 items-center border-b-2 mx-2 flex">0</p>
        </div>
      </div>
    </div>
  );
};

export default Maingame;
