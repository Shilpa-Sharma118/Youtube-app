import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/contants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVidoes] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();
    setVidoes(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap p-5">
      {videos && videos.length > 0 ? (
        videos.map((video) => {
          return (
            <Link to={"/watch?v=" + video.id} key={video.id}>
              <VideoCard video={video} />
            </Link>
          );
        })
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default VideoContainer;
