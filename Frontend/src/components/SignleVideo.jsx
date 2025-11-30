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
  console.log(selectedVideo);

  if (!selectedVideo) {
    return <h2 className="text-white p-5">Video Not Found</h2>;
  }

  return (
    <div className="text-white p-5">
      <div className="flex gap-10">
        {/* LEFT: Selected Video */}
        <div
          className={`${
            hidden ? "w-[770px] h-[350px]" : "w-[930px] h-[450px]"
          }`}
        >
          <img
            src={selectedVideo.thumbnail}
            alt="image"
            className="w-full h-full rounded-lg object-cover"
          />

          <div className="border mt-4 p-5 rounded-2xl bg-black/40 flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold leading-tight">
                {selectedVideo.title}
              </h2>
              <p className="text-sm text-zinc-400 mt-1">
                {selectedVideo.views} • {selectedVideo.time}
              </p>
              <div className="mt-4 flex gap-4">
                <img
                  src={selectedVideo.channelImg}
                  alt="img"
                  className="rounded-full h-10 w-10"
                />
                <div>
                  <p>{selectedVideo.channelName}</p>
                  <p className="text-sm text-gray-400">200K Followers</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <div className="flex items-center gap-2 border border-zinc-700 px-3 py-1 rounded-xl">
                  <BiLike className="text-lg" />
                  <span>2</span>
                </div>
                <div className="flex items-center gap-2 border border-zinc-700 px-3 py-1 rounded-xl">
                  <BiDislike className="text-lg" />
                  <span>0</span>
                </div>
                <div className="flex items-center gap-2 border border-white bg-white text-black px-3 py-1 rounded-xl">
                  <FiSave className="text-md" />
                  <span>Save</span>
                </div>
              </div>
              <BsThreeDotsVertical className="text-xl opacity-70 cursor-pointer ml-3" />
            </div>
          </div>
          <div className="border p-4 mt-4 rounded-lg min-h-30">
            <p>0 Comments</p>
            <hr className="mt-3" />
            <div className="mt-3">
              <input
                type="text"
                placeholder="Add a Comment"
                className="px-4 py-2 outline-none border rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: Other Videos */}
        <div className="flex flex-col gap-5 ">
          {videos
            .filter((v) => v.id !== Number(id))
            .map((v) => (
              <div
                key={v.id}
                className="flex gap-3 cursor-pointer border w-100"
              >
                <img
                  src={v.thumbnail}
                  alt="image"
                  className="w-40 h-28 object-cover"
                />
                <div className="flex flex-col justify-between ">
                  <h3 className="text-sm font-semibold">{v.title}</h3>
                  <p className="text-sm opacity-70 mt-5">{v.channelName}</p>
                  <div className="flex justify-between items-center text-sm opacity-70 mb-1">
                    <p>{v.views}</p>
                    <p>{v.time}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
