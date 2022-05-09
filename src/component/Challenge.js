import React, { useState } from "react";
import Footer from "../staticComponent/Footer";
import Header from "../staticComponent/Header";
import Sliders from "./Slider";
import styles from './Challenge.module.css';
import Tab from "./Tab";
import PayReady from "./kakao/PayReady";
import {Link} from 'react-router-dom';
function Challenge(){
  const [user, setUser] = useState("mijin"); //서버 데이터 가져오기
  return(
    <>
      <Header/>
      <div className={styles.challenge}>
        <h3>Challenge</h3>
        <p>{user}님이 참여하고 있는 챌린지</p>
        <p>{user}님이 보유하고 있는 챌린지 금액</p>
        <Link to ="/challengeuserpage">유저 게시판</Link>
        <Link to ="/challengemanagerpage">매니저 게시판</Link>

        <div className={styles.myChallenge}>myChallenge</div>
        <div className={styles.challengeContent}>
          <Sliders/>
          {/* <Tab/> */}
        </div>
        <PayReady/>
      </div>
      <Footer/>
    </>
  )
}
export default Challenge;