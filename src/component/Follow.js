import React, { useEffect, useState } from "react";
import styles from './Follow.module.css';
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
    <div className={styles.follow_box}>
    {/* <div className={`${login === true ? "follow-box": "none"}`}> */}
      <p className={styles.follow_text}> Chatting with Friends </p>
      <div className={styles.search}>
        <form>
          <label><BsSearch/></label>
          <input type="search" name="name" placeholder="Search"></input> 
        </form>
      </div>
      <div className={styles.friend_box}>  
        <button className={styles.user} onClick={()=>{HandleModal(true)}}><BsFillPersonFill/></button>
        <button className={styles.chat}><BsFillChatSquareDotsFill/></button>
      </div>
      
      <div className={styles.friend_box}>
        <button className={styles.user} onClick={()=>{HandleModal(true)}}><BsFillPersonFill/></button>
        <button className={styles.chat}><BsFillChatSquareDotsFill/></button> 
      </div>
      
      <div>
        {isModalOn && <LoginModal setIsModalOn={setIsModalOn}/>}
      </div>
    </div>
    </>
  )
}

export default Follow;