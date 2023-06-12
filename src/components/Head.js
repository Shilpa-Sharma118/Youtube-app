import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";

const Head = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleDisplayMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex justify-between shadow-lg">
      <div className="flex gap-2 p-2">
        <img
          className="h-5 m-1 cursor-pointer"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
          alt="hamburger menu icon"
          onClick={() => handleDisplayMenu()}
        />
        <a href="/">
          <img
            className="h-6 m-1 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="mb-2">
        <input
          className="border-2 border-gray-400 rounded-l-full h-10 p-2 w-96"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <button className="bg-slate-100 border-2 border-gray-400 rounded-r-full h-10 mt-3 w-24 font-bold">
          Search
        </button>
      </div>
      <div>
        <img
          className="h-10"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
