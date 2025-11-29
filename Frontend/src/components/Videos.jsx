import React from "react";

const Videos = () => {
  const videos = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "How to learn react | A React Roadmap",
      views: "100K Views",
      time: "18 hours ago",
      channelName: "Yash Mittal",
      channelImg: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1553166272-e69910ab5ae1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "How much I made with 70M views",
      views: "100K Views",
      time: "18 hours ago",
      channelName: "Arnau Ros",
      channelImg: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 3,
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Deno just got 2M npm packages",
      views: "100K Views",
      time: "18 hours ago",
      channelName: "Arnau Ros",
      channelImg: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      id: 4,
      thumbnail:
        "https://images.unsplash.com/photo-1496559249665-c7e2874707ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Best way to learn Socket IO | complex chat apps",
      views: "100K Views",
      time: "18 hours ago",
      channelName: "Arnau Ros",
      channelImg: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 5,
      thumbnail:
        "https://images.unsplash.com/photo-1701340981674-4cd4716178f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Terraform, fig & FreeAPI | Updates in DevOps",
      views: "100K Views",
      time: "18 hours ago",
      channelName: "Arnau Ros",
      channelImg: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
      id: 6,
      thumbnail:
        "https://images.unsplash.com/photo-1485662543942-9ab24cc0acf0?q=80&w=1155&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Let's learn React from scratch",
      views: "100K Views",
      time: "18 hours ago",
      channelName: "Arnau Ros",
      channelImg: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      id: 7,
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Google IDX Unveiled: Exclusive First Look",
      views: "100K Views",
      time: "18 hours ago",
      channelName: "Arnau Ros",
      channelImg: "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
      id: 8,
      thumbnail:
        "https://images.unsplash.com/photo-1536273513130-d8477e6e4389?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Google & Pieces dropped some interesting updates",
      views: "100K Views",
      time: "18 hours ago",
      channelName: "Arnau Ros",
      channelImg: "https://randomuser.me/api/portraits/men/37.jpg",
    },
    {
      id: 9,
      thumbnail:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "How to learn react | A React Roadmap",
      views: "100K Views",
      time: "18 hours ago",
      channelName: "Yash Mittal",
      channelImg: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 10,
      thumbnail:
        "https://images.unsplash.com/photo-1553166272-e69910ab5ae1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "How much I made with 70M views",
      views: "100K Views",
      time: "18 hours ago",
      channelName: "Arnau Ros",
      channelImg: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 11,
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Deno just got 2M npm packages",
      views: "100K Views",
      time: "18 hours ago",
      channelName: "Arnau Ros",
      channelImg: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      id: 12,
      thumbnail:
        "https://images.unsplash.com/photo-1496559249665-c7e2874707ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Best way to learn Socket IO | complex chat apps",
      views: "100K Views",
      time: "18 hours ago",
      channelName: "Arnau Ros",
      channelImg: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <div className="text-white flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {videos.map((video) => (
          <div key={video.id} className="text-white">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="rounded-sm mb-3 w-full"
            />

            <div className="flex gap-3">
              <img src={video.channelImg} className="w-10 h-10 rounded-full" />

              <div>
                <h3 className="font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-300">
                  {video.views} • {video.time}
                </p>
                <p className="text-sm text-gray-400">{video.channelName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
