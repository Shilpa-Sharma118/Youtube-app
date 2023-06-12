import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-slate-300 px-5 py-2 m-2 rounded-md">{name}</button>
  );
};

export default Button;
