import React, { useState } from "react";
import { useSelector } from "react-redux";
import { videos } from "../utils/videos/video";

const MyContentPage = () => {
  const [changeState, setChangeState] = useState("Playlist");
  const hidden = useSelector((state) => state.collapse.hidden); // Get sidebar collapse state
  let id = 1;
  const filterContent = videos.find((v) => v.id === Number(id));
  let trimLowercase = filterContent.channelName.toLowerCase();

  const contentWidth = hidden ? "calc(100vw - 264px)" : "calc(100vw - 116px)";

  return (
    <div
      className="h-[88vh] transition-all w-full sm:w-[calc(100vw-124px)]"
      style={{ width: contentWidth }}
    >
      <div className="w-full h-60 border gradient"></div>
      <div className="relative">
        <img
          src={filterContent.channelImg}
          alt="userImg"
          className="rounded-full bg-white p-1 absolute -top-10 left-10"
        />
      </div>
      <div className="flex items-center justify-between w-2/3 mt-30 md:ml-55 md:mt-5">
        <div>
          <p className="text-2xl font-bold">{filterContent.channelName}</p>
          <p>@{trimLowercase}</p>
          <p>600K Subscribers | 220 Subscribed</p>
        </div>
        <div>
          <button
            className="group relative inline-block text-sm font-medium text-yellow-600 cursor-pointer"
            href="#"
          >
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-yellow-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

            <span className="relative block border border-current bg-amber-200 px-6 py-2 ">
              {" "}
              Subscribe{" "}
            </span>
          </button>
        </div>
      </div>
      <div className="mt-8 border-t">
        <div className="flex justify-around sm:justify-center items-center gap-2 md:gap-10 px-2 sm:px-0 mt-4">
          {["Playlist", "Videos", "Tweets", "Following"].map((tab) => (
            <p
              key={tab}
              className={`
                cursor-pointer px-4 sm:px-10 py-2 
                transition-all duration-200 border-2
                ${
                  changeState === tab
                    ? "bg-amber-50 text-yellow-700 border-yellow-700"
                    : "border-gray-600 hover:bg-zinc-700"
                }
              `}
              onClick={() => setChangeState(tab)}
            >
              {tab}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-lg">
        {changeState && `Showing: ${changeState}`}
      </div>
    </div>
  );
};

export default MyContentPage;
