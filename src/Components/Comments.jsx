import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Comments = () => {
  const [data, setData]= useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(data)

  return (
    <div>
      <div className="shadow-md shadow-slate-300 p-[1em]">
        <h1 className="font-semibold p-2 text-green-600">Let's Chat</h1>
        <div className="pl-2">
        
          
        {data.map((d)=>(
          <div key={d.id}>
          <h5 className="font-semibold ">{d.username}:<span className="italic text-green-700">{d.comment}</span></h5>
          
          </div>
        ))}
        </div>
        <div className="my-2 flex justify-center items-center">
          <label className="mr-2 font-semibold text-sm">
            Comment:
          </label>
          <input
            type="text"
            name="username"
            className="w-full bg-slate-200 p-1 outline-none text-green-700"
            
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
