import React from "react";
import { Navbar_components } from "../Contraints";

const Topbar = () => {
  return (
    <div className="flex justify-between py-[1em] px-[2em] bg-green-700 text-white">
      <div>
        <h1 className="text-xl font-semibold ">Scrabble Pro</h1>
      </div>
      <div className="flex ">
        {Navbar_components.map((nav, index) => (
          <ul key={index}>
            <li className="mx-2 hover:cursor-pointer hover:text-yellow-600">{nav.label}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
