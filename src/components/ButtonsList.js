import React from "react";
import Button from "./Button";

const ButtonsList = () => {
  const list = [
    "All",
    "Live",
    "Soccer",
    "Music",
    "Podcast",
    "News",
    "Cooking",
    "Song",
    "Dance",
    "Comedy",
    "Romance",
    "Bollywood",
    "Computer Science",
    "Recently uploaded",
    "Watched",
    "Playlist",
    "New",
  ];
  return (
    <div>
      {list.map((name, idx) => (
        <Button key={idx} name={name} />
      ))}
    </div>
  );
};

export default ButtonsList;
