import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(true);
  const dispatch = useDispatch();

  const handleDisplayMenu = () => {
    dispatch(toggleMenu());
  };

  const fetchSearchList = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + search);
    const json = await data.json();
    console.log("json data", json[1]);
    setSuggestionList(json[1]);
  };

  //debouncing the API call here
  useEffect(() => {
    if (showSuggestion) {
      const timer = setTimeout(() => fetchSearchList(), 200);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [search]);

  const selectSuggestionItem = (item) => {
    console.log("item looks like", item);
    setSearch(item);
    setShowSuggestion(false);
    setSuggestionList([]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setShowSuggestion(true);
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
        <div>
          <input
            className="border-2 border-gray-400 rounded-l-full h-10 p-2 w-96"
            type="text"
            value={search}
            onChange={(e) => handleSearch(e)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="bg-slate-100 border-2 border-gray-400 rounded-r-full h-10 mt-3 w-24 font-bold">
            Search
          </button>
        </div>
        {showSuggestion && suggestionList && suggestionList.length > 0 && (
          <div className="absolute bg-white p-2 w-96 shadow-md rounded-md border border-gray-200">
            <ul>
              {suggestionList.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="cursor-pointer my-2"
                    onMouseDown={() => selectSuggestionItem(item)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
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
