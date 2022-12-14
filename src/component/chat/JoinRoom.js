import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./JoinRoom.css";
import { useRecoilState } from "recoil";
import { userState } from "../../staticComponent/state";

const JoinRoom = () => {
  const [user, setUser] = useRecoilState(userState);
  const location = useLocation();
  const room = location.state.room;

  // const { paramName} = window.location.search;
  const current_url = window.location.href; //현재주소 
  const url = new URL(current_url);
  const urlParams = url.searchParams;
  console.log(`"url:  ${urlParams}`);
  // const {paramsName, paramsRoom} = queryString.parse(current_url);
  // const [name, setName] = useState("");
  // const [room, setRoom] = useState("");
  // console.log(paramsName);
  console.log(user, room);
  // console.log(searchParam);
  return (
    <div className="joinOuterContainer">
      <h3>채팅을 시작하는 중입니다</h3>
      <Link to ='/chat' state={{name: user, room: room}}>채팅</Link>
    </div>
  );
};

export default JoinRoom;