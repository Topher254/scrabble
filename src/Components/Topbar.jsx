import React from "react";
import { Navbar_components } from "../Contraints";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex justify-between py-[1em] px-[2em] bg-green-700 text-white">
      <div>
      <Link to='/about'>
        <h1 className="text-xl font-semibold ">Scrabble Pro</h1>
        </Link>
        </div>
      <div className="flex ">
        {Navbar_components.map((nav, index) => (
          <ul key={index}>
          <Link to={nav.href}>
            <li className="mx-2 hover:cursor-pointer hover:text-yellow-600">{nav.label}</li>
            </Link> 
            </ul>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
