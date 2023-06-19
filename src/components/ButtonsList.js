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
    "Computer",
    "Recently",
    "Watched",
    "Playlist",
    "New",
  ];
  return (
    <div>
      <div className="overflow-x-scroll overflow-y-hidden snap-mandatory snap-x">
        {list.map((name, idx) => (
          <Button key={idx} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ButtonsList;
