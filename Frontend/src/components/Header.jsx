import React from "react";
import Logo from "../assets/logo.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b border-white px-5 fixed w-full bg-black z-10">
      <div className="flex justify-between items-center md:px-25 py-4 text-white">
        <div className="cursor-pointer">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="Logo"
              className="h-10 w-10"
              title="Y-Tube Home"
            />
          </Link>
        </div>
        <div className="relative hidden md:flex border border-white px-2 w-1/4">
          <MdSearch className="text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none pl-10 py-2 placeholder:text-white w-full bg-transparent"
          />
        </div>

        <div className="flex gap-4 items-center md:hidden">
          <MdSearch className="text-2xl" />
          <HiMenu className="text-2xl" />
        </div>

        <div className="hidden md:flex gap-5 items-center font-bold">
          <p className="cursor-pointer">
            <BsThreeDotsVertical />
          </p>

          <p className="cursor-pointer">Log in</p>
          <Link to="/login">
            <button
              className="group relative inline-block text-sm font-medium text-yellow-600 cursor-pointer"
              href="#"
            >
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-yellow-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

              <span className="relative block border border-current bg-amber-200 px-6 py-2 ">
                {" "}
                Sign up{" "}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
