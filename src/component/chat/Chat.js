import React, { useEffect, useState, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";

// 하위 컴포넌트
import Messages from "./Messages";
import RoomInfo from "./RoomInfo";
import Input from "./Input";

// Material-ui
import Paper from "@material-ui/core/Paper";
import { useRecoilState } from "recoil";
import { userState } from "../../staticComponent/state";

let socket;

const Chat = () => {
  // const { paramName, paramRoom } = window.location.search;
  // const [name, setName] = useState('');
  // const [room, setRoom] = useState('');
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");
  const [name, setName] = useRecoilState(userState);

  const location = useLocation();
  const mateName = location.state.name;
  const room = 'chat';
  const ENDPOINT = "http://localhost:5000";
  // console.log(name, room); // lama peru

  useEffect(() => {
    // query-string middleware의 사용
    // const data = queryString.parse(location.search);
    // console.log(location.search); // ?name=lama&room=peru
    // console.log(data); // 객체 : {name: "lama", room: "peru"}
    // 다시 정리
    // const { name, room } = queryString.parse(location.search);
    // const { name, room } = window.location.search;

    socket = io(ENDPOINT); // 소켓 연결

    // setName(name);
    // setRoom(room);

    console.log(name, room); // lama peru

    // console.log(socket);
    socket.emit("join", { name, room }, (error) => {
      // console.log("error");
      // 에러 처리
      if (error) {
        alert(error);
      }
    });

    // return () => {
    //   socket.emit("disconnect");

    //   socket.off();
    // };
  }, [ENDPOINT]); // 한번만 부른다 // 불필요한 사이드 이펙트를 줄인다

  useEffect(() => {
    // 서버에서 message 이벤트가 올 경우에 대해서 `on`
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  // 메세지 보내기 함수
  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, setMessage(""));
    }
  };

  console.log(message, messages);
  console.log(users, "users");

  return (
      <div className="chatContainer">
        <h3>Chat</h3>
        <div className="chatScreen">
          <Paper elevation={5} className="chatScreenPaper">
            <RoomInfo room={mateName} />
            <Messages messages={messages} name={name} />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </Paper>
        </div>
      </div>
  );
};

export default Chat;