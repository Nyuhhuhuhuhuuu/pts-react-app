import { Link } from "react-router-dom";

import React from "react";

export default function Navbar({ setPages }) {
  return (
    <div className="flex z-10 top-0 flex-items justify-between items-center py-4 px-6 bg-dark-teal sticky">
      <div className="flex items-center flex-shrink-0 text-slate-300 mr-6">
        <Link to="/">
          <img src="#" alt="logo" className="mr-2" />
          <span className="font-semibold text-xl tracking-tight">Nama</span>
        </Link>
      </div>
      <div className="flex flex-items items-center">
        <Link to="/login">
          <button className="text-lg mx-2 text-slate-300 hover:text-white transition-color ease-in-out duration-200">
            Login
          </button>
        </Link>
        <span className="text-slate-300">|</span>

        <Link to="/signup">
          <button className="text-lg mx-2 text-slate-300 hover:text-white transition-color ease-in-out duration-200">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
