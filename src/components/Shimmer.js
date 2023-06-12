import React from "react";

const Shimmer = () => {
  const shimmerArr = Array(9).fill(1);

  return (
    <div className="flex">
      {shimmerArr.map((item, idx) => {
        return <div key={idx} className="bg-zinc-400 h-52 w-52 p-2 m-2"></div>;
      })}
    </div>
  );
};

export default Shimmer;
