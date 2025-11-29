import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { useSelector } from "react-redux";

const Layout = () => {
  const hidden = useSelector((state) => state.collapse.hidden);

  return (
    <div>
      <Header />
      <div className="flex bg-black min-h-screen text-white">
        <Sidebar />
        <div
          className={`absolute top-20 transition-all ${
            hidden ? "left-65" : "left-25"
          }`}
        >
          <Videos />
        </div>
      </div>
    </div>
  );
};

export default Layout;
