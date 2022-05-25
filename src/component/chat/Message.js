import React from "react";
import "./Message.css";

// 메세지 기록에 남는 배열 생성 및 보여줌
const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase(); //본인 입장
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="messageContainer end">
      <div className="messageBox">
        <p className="messageText">{text}</p>
      </div>
      <p className="sentMessage pl-10">{trimmedName}</p>
    </div>
  ) : (
    <div className="messageContainer start">
      <p className="sentMessage pr-10">{user}</p>
      <div className="messageBox backgroundLight">
        <p className="messageText">{text}</p>
      </div>
    </div>
  );
};

export default Message;