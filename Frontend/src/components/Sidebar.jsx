import React, { useState } from "react";
import { AiFillHome, AiOutlineHistory } from "react-icons/ai";
import { BiLike, BiCollection, BiArrowBack } from "react-icons/bi";
import { MdVideoLibrary, MdSubscriptions } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setCollapse } from "../redux/slice/sidebarSlice";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();

  let sidebarOption = [
    { text: "home", title: "Home", icon: <AiFillHome /> },
    { text: "liked video", title: "Liked Video", icon: <BiLike /> },
    { text: "history", title: "History", icon: <AiOutlineHistory /> },
    { text: "my content", title: "My Content", icon: <MdVideoLibrary /> },
    { text: "collection", title: "Collection", icon: <BiCollection /> },
    { text: "subscribers", title: "Subscribers", icon: <MdSubscriptions /> },
  ];

  const sidebarOption2 = [
    { text: "Support", title: "Support", icon: <AiOutlineQuestionCircle /> },
    { text: "Settings", title: "Settings", icon: <FiSettings /> },
  ];

  const handleCollapse = (e) => {
    e.preventDefault();
    dispatch(setCollapse(!isOpen));
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-18 left-0 h-[calc(100vh-64px)] bg-black border-r
         border-white p-5 transition-all duration-300 z-9 ${
           isOpen ? "w-64" : "w-20"
         }`}
    >
      <div
        onClick={handleCollapse}
        className="border rounded-full w-10 h-10 flex justify-center items-center bg-black
       absolute top-3 -right-5 cursor-pointer "
      >
        <BiArrowBack
          className={`${!isOpen && "rotate-180"} transition-all duration-300`}
        />
      </div>

      <div className="mt-10">
        <div className="flex flex-col gap-60">
          <div>
            {sidebarOption.map((item, i) => (
              <div
                className={`border py-2 px-2 mb-2 capitalize flex gap-3
          items-center justify-center md:justify-start hover:bg-zinc-800 transition-all duration-200 ${
            !isOpen ? "rounded-lg" : ""
          }`}
                key={i}
                title={isOpen ? null : item.title}
              >
                <span className="text-xl">{item.icon}</span>
                {isOpen && (
                  <span className="whitespace-nowrap hidden md:block">
                    {item.text}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div>
            {sidebarOption2.map((item, i) => (
              <div
                className={`border py-2 px-2 mb-2 capitalize flex gap-3
              items-center justify-center md:justify-start hover:bg-zinc-800 transition-all duration-200 ${
                !isOpen ? "rounded-lg" : ""
              }`}
                key={i}
                title={isOpen ? null : item.title}
              >
                <span className="text-xl">{item.icon}</span>
                {isOpen && (
                  <span className="whitespace-nowrap hidden md:block">
                    {item.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
