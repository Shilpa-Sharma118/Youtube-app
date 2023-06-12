import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/menuSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(hideMenu());
  }, []);
  return (
    <div className="p-5 m-10">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
