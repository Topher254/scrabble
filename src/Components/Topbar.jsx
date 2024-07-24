import React from "react";
import { Link } from "react-router-dom";
import { Navbar_components } from "../Contraints"; 
import user from '../assets/username.png'; 

const Topbar = () => {
  const username = localStorage.getItem('username'); 

  return (
    <div className="flex justify-between py-[1em] px-[2em] bg-green-700 text-white">
      <div>
        <Link to='/'> {/* Updated route to the game landing page */}
          <h1 className="text-xl font-semibold">Scrabble Pro</h1>
        </Link>
      </div>
      <div className="flex justify-evenly items-center">
        <div className="flex mr-[1em]">
          {Navbar_components && Navbar_components.length > 0 ? (
            <ul className="flex">
              {Navbar_components.map((nav, index) => (
                <li key={index} className="mx-2">
                  <Link to={nav.href} className="hover:cursor-pointer hover:text-yellow-600 bg-white text-green-600 px-2 py-1 rounded-sm">
                    {nav.label}
                  </Link>
                </li>
              ))}
              {/* Adding Signup link */}
              <li className="mx-2">
                <Link to="/signup" className="hover:cursor-pointer hover:text-yellow-600 bg-white text-green-600 px-2 py-1 rounded-sm">
                  Signup
                </Link>
              </li>
            </ul>
          ) : (
            <p>No navigation items available</p>
          )}
        </div>
        <div className="flex justify-center items-center">
          <img src={user} alt="userimage" className="h-8 rounded-full" />
          <p className="ml-1 hover:cursor-pointer">{username || 'Guest'}</p> {/* Display username or 'Guest' if not logged in */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
