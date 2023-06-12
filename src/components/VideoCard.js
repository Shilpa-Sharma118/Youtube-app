import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;

  return (
    <div className="p-2 m-2 w-80 shadow-md h-80">
      <img
        alt="video thumbnail"
        src={snippet.thumbnails.medium.url}
        className="rounded-md"
      />
      <h2 className="font-bold">{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <h3>{statistics.viewCount} views</h3>
    </div>
  );
};

export default VideoCard;
