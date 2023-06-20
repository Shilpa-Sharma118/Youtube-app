import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 shadow-sm">
      <img
        src="https://yt4.ggpht.com/aKdGvh6ztixbrhhXaxmf0dJ17-BS2BibJc0aN0JMxHHjl-QBNY96Kiav03Hz5wqB-UE7fDnAcQ=s64-c-k-c0x00ffffff-no-rj"
        alt="user"
        className="rounded-full h-8"
      />
      <span className="font-bold px-2">{name}</span>
      <span className="">{message}</span>
    </div>
  );
};

export default ChatMessage;
