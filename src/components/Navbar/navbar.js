"use client";
import React from "react";
import logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* logo section */}
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <ul className="hidden md:flex space-x-6 text-black">
            {/* menu section */}
            <li className="hover:bg-red-200 py-2 px-4 m-auto cursor-pointer rounded-sm">
              <Link to="/">Home </Link>
            </li>
            <li className="hover:bg-red-200 py-2 px-4 m-auto cursor-pointer rounded-sm">
              <Link to="/about">About </Link>
            </li>
            <li className="hover:bg-red-200 py-2 px-4 m-auto cursor-pointer rounded-sm">
              <Link to="/contact">Contact </Link>
            </li>
          </ul>
          <button className="md:hidden text-white text-2xl">☰</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
