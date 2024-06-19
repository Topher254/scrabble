import React, { useState } from 'react'
import { FaPaperPlane} from 'react-icons/fa'

export const CommentNew = () => {
    const [input,setinput] = useState("");
    const onAddcomment=()=>{
        
    }

  return (
    
    <div>
        {}
      
      <div className="shadow-md shadow-slate-300 p-[1em]">
        <h1 className="font-semibold p-2 text-green-600">Let's Chat</h1>
        <div className="pl-2">
        
          
        
          <div >
          <h5 className="font-semibold ">{""}:<span className="italic text-green-700">{""}</span></h5>
          
          </div>
        
        </div>
        <div className="my-2 flex justify-center items-center">
          <label className="mr-2 font-semibold text-sm">
            Comment:
          </label>
          <input
          value={input}
          onChange={(e)=> setinput(e.target.value)}
            type="text"
            name="username"
            className="w-full bg-slate-200 p-1 outline-none text-green-700"
            
          />
          <a>
            <FaPaperPlane size={20} className="ml-2 text-green-600 hover:cursor-pointer"
            
            onClick={onAddcomment}/>
          </a>
        </div>
      </div>
    </div>

  )
}
