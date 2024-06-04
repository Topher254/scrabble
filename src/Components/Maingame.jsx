import React from "react";
import imagee from "../assets/image.jpeg";
import { GiBullets } from "react-icons/gi";
import { FaAngleDown, FaBars } from "react-icons/fa";
import Play from "./Play";
import Play2 from "./Play2";

const Maingame = () => {
  return (
    <div className="bg-[url(imagee)] shadow-md shadow-green-650 px-[1em] py-[1em] mx-[4em] my-[4em] min-h-[60%] ">
      <div className="flex justify-between">
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
      <div className="py-[2em]">
      <div>
      <Play2/>
     
      
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
