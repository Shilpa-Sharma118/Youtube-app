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
    "Cooking",
    "Song",
    "Dance",
    "Comedy",
    "Romance",
    "Bollywood",
    "Computer",
  ];

  const showMoreRightItems = () => {};

  const showMoreLeftItems = () => {};

  return (
    <div className="flex items-center mt-3 p-1">
      <button onClick={() => showMoreLeftItems()}>◀︎</button>
      <div className="w-[85rem] h-14 flex overflow-x-hidden">
        {list.map((name, idx) => (
          <Button key={idx} name={name} />
        ))}
      </div>
      <button className="p-1" onClick={() => showMoreRightItems()}>
        ►
      </button>
    </div>
  );
};

export default ButtonsList;
