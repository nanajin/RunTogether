import React, { useState } from "react";
import {Link} from 'react-router-dom';
import styles from '../component/Main.module.css';
import Sliders from "../component/Slider";
import Footer from "../staticComponent/Footer";
import Header from "../staticComponent/Header";
import Follow from "./Follow";
import Tab from "./Tab";
import LoginModal from "./LoginModal";
import Cards from "./Cards";

function Main(){
  const isLogin = true;
  const [isModalOn, setIsModalOn] = useState(false);
  const HandleModal = (active)=>{
    setIsModalOn(active);
  }
  return(
    <>
    <div className={styles.main}>
      <Header/>
      <div className={styles.runImage}>
        <div className={styles.introduction}>
          <p>Run Together With Your Friends</p>
          <button onClick={()=>{HandleModal(true)}}>Get Started</button>
        </div>
        <div>
        {isModalOn && <LoginModal setIsModalOn={setIsModalOn}/>}
        </div>
      </div>
    

    {/* <div className={styles.mobile}>
      <div className={styles.main_userbox}>
        {isLogin?
          <div className={styles.afterlogin}>
              <img src="C:\Users\nmj37\Desktop\js_test\react-project\public\image\background_run.png"/>
              <p>~님 환영합니다!</p>
             
                <Link to = '/userupdate'>
                  <button className={styles.m_update_btn}>회원정보 수정</button>
                </Link>
                <Link to = '/mypage'>
                  <button className={styles.m_mypage_btn}>마이페이지</button>
                </Link>
             
          </div>
          
          :<div className={styles.beforelogin}>
            <Link to = '/login'>
              <button className={styles.m_login_btn}>로그인(Login)</button>
            </Link>
            <p>아직 회원이 아니십니까?</p>
            <Link to = '/signup'>
              <button className={styles.m_signup_btn}>회원가입(Sign Up)</button>
          </Link>
          </div>
        }
        <Follow/>
      </div> */}

      {/* <div className={styles.left}> */}
        <Cards/>
      {/* </div> */}
      <div className={styles.tab}>
        <Tab/>
      </div>
      <div>
        <Footer/>
      </div>
      </div>

    </>
  )
}
export default Main;