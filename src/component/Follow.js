import React, { useEffect, useState } from "react";
import './Follow.css';
import {BsFillChatSquareDotsFill, BsSearch, BsFillPersonFill} from 'react-icons/bs';
import LoginModal from "./LoginModal";
function Follow(props){
  const [login, setLogin] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);
  const HandleModal = (active)=>{
    setIsModalOn(active);
  }
  // const memorizedLogin = useCallback(setLogin(props), [login]);
  // let login = false;
  
  // const prevlogin = useRef(false);
  // useEffect(()=>{
  //     if(props){
  //       prevlogin.current = login;
  //       setLogin(prevlogin);
  //     }
  //     console.log(login);
  //   },[login]);
  //채팅 친구는 백에 요청해서 팔로우한 친구들로 채울 것
  return(
    <>
    <div className="follow-box">
    {/* <div className={`${login === true ? "follow-box": "none"}`}> */}
      <p className="follow-text"> Chatting with Friends </p>
      <div className="search">
        <form>
          <label><BsSearch/></label>
          <input type="search" name="name" placeholder="Search"></input> 
        </form>
      </div>
      <div className="friend-box">  
        <button className="user" onClick={()=>{HandleModal(true)}}><BsFillPersonFill/></button>
        <button className="chat"><BsFillChatSquareDotsFill/></button>
      </div>
      
      <div className="friend-box">
        <button className="user" onClick={()=>{HandleModal(true)}}><BsFillPersonFill/></button>
        <button className="chat"><BsFillChatSquareDotsFill/></button> 
      </div>
      
      <div>
        {isModalOn && <LoginModal setIsModalOn={setIsModalOn}/>}
      </div>
    </div>
    </>
  )
}

export default Follow;