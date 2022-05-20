import React, { useEffect, useState } from "react";
import styles from './RunningMate.module.css';
import {BsFillChatSquareDotsFill, BsSearch, BsFillPersonFill} from 'react-icons/bs';
import Header from "../staticComponent/Header";
import Footer from "../staticComponent/Footer";
import { Link } from "react-router-dom";
import LoginWarning from "./LoginWarning";
import axios from "axios";
import Loading from "./Loading";
import { useRecoilState } from "recoil";
import {loginState} from "../staticComponent/state";

function RunningMate(){
  const [login, setLogin] = useRecoilState(loginState);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false);
  });

  
  //채팅 친구는 백에 요청해서 팔로우한 친구들로 채울 것
  console.log(loading);
  return(
    <>
      <Header/>
      {!loading && login && 
      // {!loading && isLogin?
      <div className={styles.mate}>
        <h3>Running Mate</h3>
        <div className={styles.friend}>
          <Link to ="/mateview">
            <div className={styles.friend_box}>
              <img src="image/profile.png" alt="프로필"></img>
              <p>MJ Na</p>
              <p>최근 러닝 기록</p>
            </div>
          </Link>
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
      {loading && <Loading/>}
      {!loading && !login && <LoginWarning/>}
      <Footer/>
    </>
  )
}

export default RunningMate;