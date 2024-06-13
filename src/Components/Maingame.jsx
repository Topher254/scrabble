import React from "react";

import { GiBullets } from "react-icons/gi";
import { FaAngleDown, FaBars } from "react-icons/fa";
import Play from "./Play";
import Play2 from "./Play2";
import GridCell from "./GridCell";

import FirstDiv from "./FirstDiv";
import SecondDiv from "./SecondDiv";
import Letters from "./Letters";
import Comments from "./Comments";
import Test from "./Test";

const Maingame = () => {
  return (
    <div className=" shadow-green-650 px-[1em] pb-[2em] mx-[1em] my-[1em] min-h-[60%] flex  ">
      {/*playyy */}
      <div className="flex   ">
        <Play2 className="flex" />
        
      </div>

      <div className="px-[1em] w-full rounded-md ">
        <div className="">
          <Letters className="py-2" />
          <FirstDiv className="py-2" />
          <SecondDiv className="py-2" />
          <Comments className="py-2" />
        </div>
      </div>
    </div>
  );
};

export default Maingame;
