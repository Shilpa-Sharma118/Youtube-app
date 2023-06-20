import React, { useState } from "react";

const Demo = () => {
  const [text, setText] = useState("");
  //Now you know that whenever text changes this component will rerender and diplay the new value of text.

  //Imagine doing some complex calucations/operation which will also happen whenever you change this input value
  //NOW, what i can do is memoize this heavy operation

  return (
    <div className="h-96 w-96 border p-2 m-2 border-green-900">
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 m-2 bg-slate-200 rounded-md"
        />
      </div>
    </div>
  );
};

export default Demo;
