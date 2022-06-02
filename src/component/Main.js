import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import styles from '../component/Main.module.css';
import Sliders from "../component/Slider";
import Footer from "../staticComponent/Footer";
import Header from "../staticComponent/Header";
import RunningMate from "./RunningMate";
import Tab from "./Tab";
import Cards from "./Cards";
import axios from "axios";
import MainHeader from "../staticComponent/MainHeader";
import Fade from 'react-reveal/Fade';
import {useRecoilState} from 'recoil';
import {loginState, userState} from "../staticComponent/state";
import {useMediaQuery} from 'react-responsive'
import Chat from "./chat/Chat";
function Main(){
  const [login, setLogin] = useRecoilState(loginState);
  const [user, setUser] = useRecoilState(userState);
  const isMobile = useMediaQuery({
    query: "(max-width: 780px)"
  });
  
  return(
    <>
    <div className={styles.main}>
      {isMobile ? <Header/> : <MainHeader/>}
      <div className={styles.main_img}>
        <img src="image/run_back.png" className={styles.runImage}></img>
        {login? 
          <>
          {isMobile && <p className={styles.welcome}><span>{user}</span>님 환영합니다</p>}
          <Link to="/record">
            <button className={styles.startbtn}>Get Started</button>  {/*로그인 전엔 /login으로 이동, 후엔 /record로 이동*/}
          </Link>
          </>:
          <Link to="/login">
            <button className={styles.startbtn}>Get Started</button>  
          </Link>}    
      </div>
      <Fade bottom>
        <Cards/>
      </Fade>
      <Footer/>
      </div>

    </>
  )
}
export default Main;