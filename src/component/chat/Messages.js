import React from "react";
import Message from "./Message";
import "./Messages.css";

//채팅창에 떠 있는 메세지들 -> message.js 로 
const Messages = ({ messages, name }) => (
  <div className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </div>
);

export default Messages;