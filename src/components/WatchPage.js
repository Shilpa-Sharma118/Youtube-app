import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/menuSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(hideMenu());
  }, []);
  return (
    <div className="w-full">
      <div className="p-5 m-5">
        <div className="flex">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <LiveChat />
        </div>
      </div>
      <div className="w-[1200px]">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
