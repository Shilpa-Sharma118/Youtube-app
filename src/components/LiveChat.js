import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  //polling evry 2sec
  useEffect(() => {
    const interval = setInterval(() => {
      //make API call
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateMessage(20) + "🌈",
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const sendLiveMessage = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Shilpa Sharma",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <div>
      <div className="border p-2 ml-2 border-black w-[400px] bg-slate-100 h-[600px] rounded-lg overflow-y-scroll flex-col-reverse">
        {chatMessages.map((item, idx) => (
          <ChatMessage key={idx} name={item.name} message={item.message} />
        ))}
      </div>
      <form
        className="ml-3 mt-2 border-2 p-2 rounded-md"
        onSubmit={(e) => sendLiveMessage(e)}
      >
        <div className="flex items-center gap-1">
          <img
            className="h-8 bg-slate-200 rounded-full"
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            alt="user"
          />
          <span className="font-bold">Shilpa Sharma</span>
        </div>
        <input
          type="text"
          value={liveMessage}
          className="border-b-2 border-zinc-600 p-1 m-1 w-80"
          placeholder="Say something.."
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className="bg-red-200 border px-2 m-1"
          onClick={(e) => sendLiveMessage(e)}
        >
          ⌲
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
