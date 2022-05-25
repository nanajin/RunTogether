import React, { useEffect, useState } from "react";
import styles from './RunningMate.module.css';
import {BsFillChatDotsFill, BsSearch, BsFillPersonFill} from 'react-icons/bs';
import Header from "../staticComponent/Header";
import Footer from "../staticComponent/Footer";
import { Link } from "react-router-dom";
import LoginWarning from "./LoginWarning";
import axios from "axios";
import Loading from "./Loading";
import { useRecoilState } from "recoil";
import {loginState, userState} from "../staticComponent/state";
function RunningMate(){
  const [login, setLogin] = useRecoilState(loginState);
  const [user, setUser] = useRecoilState(userState);
  const [person, setPerson] = useState('n'); 
  // const [loading, setLoading] = useState(true);
  // useEffect(()=>{
  //   setLoading(false);
  // });

  //채팅 친구는 백에 요청해서 팔로우한 친구들로 채울 것
  // console.log(loading);
  return(
    <>
      <Header/>
      {login && 
      <div className={styles.mate}>
        <h3>Running Mate</h3>
        <div className={styles.friend}>
          {/* <Link to ="/mateview"> */}
            <div className={styles.friend_box}>
              <img src="image/profile.png" alt="프로필"></img>
              <p>{person}</p>
              <p>최근 러닝 기록</p>
                {/* <Link to={`/joinroom?name=${user}&room=${person}`}> */}
                <Link to={`/chat`} state={{room: person}}>
                  <button className={styles.chat_btn}>
                    <BsFillChatDotsFill/>
                  </button>
                </Link>
            </div>
          {/* </Link> */}
          <div className={styles.friend_box}>
          <img src="image/profile.png" alt="프로필"></img>
            <p>YJ J</p>
            <p>최근 러닝 기록</p>
          </div>
          <div className={styles.friend_box}>
          <img src="image/profile.png" alt="프로필"></img>
            <p>KC K</p>
            <p>최근 러닝 기록</p>
          </div>
        </div>
      </div>}
      {/* {loading && <Loading/>} */}
      {!login && <LoginWarning/>}
      <Footer/>
    </>
  )
}

export default RunningMate;