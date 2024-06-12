import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Comments = () => {
  return (
    <div>
      <div className="shadow-md shadow-slate-300 p-[1em]">
        <h1 className="font-semibold p-2 text-green-600">Let's Chat</h1>
        <div className="pl-2">
          <p>Comment1</p>
          <p>Comment2</p>
          <p>Comment3</p>
        </div>
        <div className="my-2 flex justify-center items-center">
          <label  className="mr-2 font-semibold text-sm">
           Comment:
          </label>
          <input
            type="text"
            
            name="username"
            className="w-full bg-slate-200  p-1 outline-none text-green-700 "
          />
          <a>
          <FaPaperPlane size={20} className="ml-2 text-green-600 hover:cursor-pointer"/>
          </a>
          </div>
      </div>
    </div>
  );
};

export default Comments;
