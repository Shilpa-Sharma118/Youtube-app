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
  ];
  return (
    <div>
      <div className="mt-3">
        {list.map((name, idx) => (
          <Button key={idx} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ButtonsList;
