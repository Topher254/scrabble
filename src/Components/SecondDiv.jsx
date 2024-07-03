import React, { useEffect, useState } from "react";
import imagee from "../assets/username.png";

const SecondDiv = () => {
  const [backendUser, setBackendUser] = useState({ users: [] });

  useEffect(() => {
    fetch("http://localhost:8000/api")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log fetched data
        setBackendUser(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Log any errors
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-evenly">
        <div className="p-[1em] shadow-md shadow-slate-300">
          <h2 className="font-semibold p-2 text-green-600 text-xl">Gang</h2>
          <div>
            <ul className="pl-2">
              <li className="flex items-center">
                 <span className="font-semibold text-green-800 italic pr-2 border-green-500">
                  {backendUser.users.length === 0 ? (
                    <p>Loading Users ...</p>
                  ) : (
                    backendUser.users.map((user, i) => (
                      
                      <p key={i}>{user.username}:
                      <span className="ml-2 font-normal  text-blue-700">{user.score}</span></p>
                    ))
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondDiv;
