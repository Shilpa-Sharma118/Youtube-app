import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  //Early return pattern
  const displayMenu = useSelector((store) => store.menu.isMenuOpen);

  if (!displayMenu) return null;

  return (
    <div className="shadow-lg w-48 p-5">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <hr></hr>
      <h1 className="font-bold pt-3">Subscriptions</h1>
      <ul>
        <li>Lama Dev</li>
        <li>AK</li>
        <li>T-series</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Intense</li>
      </ul>
      <hr></hr>
      <h1 className="font-bold pt-3">Explore</h1>
      <ul>
        <li>Shopping</li>
        <li>Music</li>
        <li>News</li>
        <li>Gaming</li>
        <li>Fashion</li>
      </ul>
    </div>
  );
};

export default SideBar;
