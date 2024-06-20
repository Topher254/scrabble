import React from "react";
import { Navbar_components } from "../Contraints";
import { Link } from "react-router-dom";
import user from '../assets/username.png'
const Topbar = () => {
  return (
    <div className="flex justify-between py-[1em] px-[2em] bg-green-700 text-white">
      <div>
      <Link to='/about'>
        <h1 className="text-xl font-semibold ">Scrabble Pro</h1>
        </Link>
        </div>
        <div className="flex justify-evenly items-center">
      <div className="flex mr-[1em] ">
        {Navbar_components.map((nav, index) => (
          <ul key={index}>
          <Link to={nav.href}>
            <li className="mx-2 hover:cursor-pointer hover:text-yellow-600 bg-white text-green-600 px-2 py-1 rounded-sm">{nav.label}</li>
            </Link> 
            </ul>
        ))}
      </div>
      <div className="flex justify-center items-center">
      <img src={user} alt="userimage" className="h-8 rounded-full"/>
      <p className="ml-1  hover:cursor-pointer">UserName</p>
      </div>
      </div>
    </div>
  );
};

export default Topbar;
