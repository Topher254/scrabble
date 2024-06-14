import React from 'react'
import imagee from "../assets/image.jpeg";

const SecondDiv = () => {
  return (
    <div>
        <div className="  flex flex-col justify-evenly">
          <div className='p-[1em] shadow-md shadow-slate-300'>
            <h2 className="font-semibold p-2 text-green-600 ">Players Online</h2>
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
         
        </div>
    </div>
  )
}

export default SecondDiv
