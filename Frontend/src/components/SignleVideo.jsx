import React from "react";
import { videos } from "../utils/videos/video";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiDislike, BiLike } from "react-icons/bi";
import { FiSave } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const SingleVideo = () => {
  const { id } = useParams();
  const hidden = useSelector((state) => state.collapse.hidden);
  const selectedVideo = videos.find((v) => v.id === Number(id));

  if (!selectedVideo) {
    return <h2 className="text-white p-5">Video Not Found</h2>;
  }

  return (
    <div className="text-white p-2 sm:p-5 w-full">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* LEFT */}
        <div
          className={`transition-all w-full 
      ${hidden ? "lg:w-[70%]" : "lg:w-[975px]"}`}
        >
          {/* VIDEO */}
          <img
            src={selectedVideo.thumbnail}
            alt="image"
            className="w-full h-48 xs:h-56 sm:h-72 md:h-96 lg:h-[450px] rounded-lg object-cover"
          />

          {/* VIDEO INFO CARD */}
          <div
            className="border mt-4 p-3 sm:p-5 rounded-2xl bg-black/40 
        flex flex-col sm:flex-row justify-between gap-4 sm:gap-5"
          >
            <div>
              <h2 className="text-lg sm:text-2xl font-semibold leading-tight line-clamp-2">
                {selectedVideo.title}
              </h2>

              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                {selectedVideo.views} • {selectedVideo.time}
              </p>

              {/* CHANNEL INFO */}
              <div className="mt-3 flex gap-3">
                <img
                  src={selectedVideo.channelImg}
                  alt="img"
                  className="rounded-full h-9 w-9 sm:h-10 sm:w-10"
                />

                <div>
                  <p className="text-sm sm:text-base">
                    {selectedVideo.channelName}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    200K Followers
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex justify-between items-center w-full sm:w-auto">
              <div className="flex gap-2 sm:gap-4 items-center flex-wrap">
                <div className="flex items-center gap-1 border border-zinc-700 px-2 py-1 rounded-xl text-xs sm:text-sm">
                  <BiLike className="text-lg" />
                  <span>2</span>
                </div>

                <div className="flex items-center gap-1 border border-zinc-700 px-2 py-1 rounded-xl text-xs sm:text-sm">
                  <BiDislike className="text-lg" />
                  <span>0</span>
                </div>

                <div className="flex items-center gap-1 border border-white bg-white text-black px-2 py-1 rounded-xl text-xs sm:text-sm">
                  <FiSave className="text-md" />
                  <span>Save</span>
                </div>
              </div>

              <BsThreeDotsVertical className="text-xl opacity-70 cursor-pointer ml-3" />
            </div>
          </div>

          {/* COMMENT SECTION */}
          <div className="border p-3 sm:p-4 mt-4 rounded-lg min-h-30">
            <p className="text-sm sm:text-base">0 Comments</p>
            <hr className="mt-3" />

            <div className="mt-3">
              <input
                type="text"
                placeholder="Add a Comment"
                className="px-3 sm:px-4 py-2 outline-none border rounded-lg w-full bg-black/30 text-sm"
              />
            </div>
          </div>
        </div>

        {/* RIGHT - OTHER VIDEOS */}
        <div className="flex flex-col gap-3 w-full lg:w-[30%]">
          {videos
            .filter((v) => v.id !== Number(id))
            .map((v) => (
              <div
                key={v.id}
                className="flex items-start gap-2 cursor-pointer 
          p-2 rounded-lg w-full bg-black/20
          sm:border sm:p-3"
              >
                <img
                  src={v.thumbnail}
                  alt="image"
                  className="w-28 h-20 sm:w-40 sm:h-28 rounded-md object-cover"
                />

                <div className="flex flex-col w-full">
                  <h3 className="text-sm font-semibold line-clamp-2 leading-snug">
                    {v.title}
                  </h3>

                  <p className="text-xs opacity-70 mt-1">{v.channelName}</p>

                  <p className="text-xs opacity-50">
                    {v.views} • {v.time}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
