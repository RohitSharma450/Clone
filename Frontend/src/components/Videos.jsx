import React from "react";
import { Link } from "react-router-dom";
import { videos } from "../utils/videos/video";

const Videos = () => {
  return (
    <div className="text-white flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
        {videos.map((video) => (
          <Link to={`/video/${video.id}`} key={video.id}>
            <div className="text-white">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="rounded-sm mb-3 w-full"
              />

              <div className="flex gap-3">
                <img
                  src={video.channelImg}
                  className="w-10 h-10 rounded-full"
                />

                <div>
                  <h3 className="font-semibold">{video.title}</h3>
                  <p className="text-sm text-gray-300">
                    {video.views} • {video.time}
                  </p>
                  <p className="text-sm text-gray-400">{video.channelName}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Videos;
