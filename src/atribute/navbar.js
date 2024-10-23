import { Link } from "react-router-dom";
import Image from "../images/location.svg";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the session data from the PHP backend
    fetch("http://localhost:80/api/start.php", {
      credentials: "include", // Include cookies for session handling
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.username) {
          setUser(data); // Set the user data if logged in
        } else {
          console.log(data.error); // Handle if the user is not logged in
        }
      })
      .catch((error) => console.error("Error fetching session data:", error));
  }, []);

  return (
    <div className="flex z-10 top-0 flex-items justify-between items-center py-4 px-6 bg-dark-teal sticky">
      <div className="flex items-center flex-shrink-0 text-slate-300 mr-6">
        <Link to="/pts-react-app">
          <img src="#" alt="logo" className="mr-2" />
          <span className="font-semibold text-xl tracking-tight">Nama</span>
        </Link>
      </div>
      <div className="flex flex-items items-center">
        {user ? (
          // logged in
          <>
            <img
              src={Image}
              alt="profile"
              className="h-10 w-10 border rounded-full object-fill"
            />
            <Link to="/profile">
              <button className="text-lg mx-2 text-slate-300 hover:text-white transition-color ease-in-out duration-200">
                {user.username} {/* Display logged-in user's username */}
              </button>
            </Link>
            <span className="text-slate-300">|</span>

            <Link to="/logout">
              <button className="text-lg mx-2 text-slate-300 hover:text-white transition-color ease-in-out duration-200">
                Log Out
              </button>
            </Link>
          </>
        ) : (
          // haven't logged in
          <>
            <Link to="/login">
              <button className="text-lg mx-2 text-slate-300 hover:text-white transition-color ease-in-out duration-200">
                Login
              </button>
            </Link>
            <span className="text-slate-300">|</span>

            <Link to="/sign-up">
              <button className="text-lg mx-2 text-slate-300 hover:text-white transition-color ease-in-out duration-200">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
