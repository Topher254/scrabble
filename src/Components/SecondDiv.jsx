import React from 'react'
import imagee from "../assets/userName.png";

const SecondDiv = () => {
  return (
    <div>
        <div className="  flex flex-col justify-evenly">
          <div className='p-[1em] shadow-md shadow-slate-300'>
            <h2 className="font-semibold p-2 text-green-600 text-xl ">Gang</h2>
            <div>
              <ul className="pl-2">
                <li className="flex items-center">
                  <img src={imagee} className="w-10 mr-2 rounded-full" />
                  <span className='border-r-2 font-semibold text-green-800 italic pr-2 border-green-500'>{'UserName'} </span> <span className='ml-1 font-semibold'>Score :{' score'}</span>
                </li>
                
                
              </ul>
            </div>
          </div>
         
        </div>
    </div>
  )
}

export default SecondDiv
