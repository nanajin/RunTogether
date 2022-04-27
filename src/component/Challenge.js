import React, { useState } from "react";
import Footer from "../staticComponent/Footer";
import Header from "../staticComponent/Header";
import Sliders from "./Slider";
import styles from './Challenge.module.css';
function Challenge(){
  const [user, setUser] = useState("mijin"); //서버 데이터 가져오기
  return(
    <div className={styles.challenge}>
      <Header/>

      <h3>Challenge</h3>
      <p>{user}님이 참여하고 있는 챌린지</p>
      <Footer/>
    </div>
  )
}
export default Challenge;