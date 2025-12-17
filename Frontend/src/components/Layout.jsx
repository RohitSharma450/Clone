import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const hidden = useSelector((state) => state.collapse.hidden);

  return (
    <div>
      <Header />

      <div className="flex bg-black min-h-screen text-white">
        <Sidebar />

        <div
          className={`mt-20 sm:absolute transition-all 
            ${hidden ? "md:left-65" : "left-25"}`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
