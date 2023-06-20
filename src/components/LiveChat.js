import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

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

  return (
    <div className="border p-2 ml-2 border-black w-[400px] bg-slate-100 h-[600px] rounded-lg overflow-y-scroll flex-col-reverse">
      {chatMessages.map((item, idx) => (
        <ChatMessage key={idx} name={item.name} message={item.message} />
      ))}
    </div>
  );
};

export default LiveChat;
