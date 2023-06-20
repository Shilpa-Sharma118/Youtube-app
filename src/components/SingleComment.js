import React from "react";

const SingleComment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="p-1 m-2">
      <div className="flex gap-1">
        <img
          className="h-10 bg-slate-200 rounded-full"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user"
        />
        <div>
          <h1 className="font-bold">{name}</h1>
          <h2>{text}</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
