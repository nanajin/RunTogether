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

function Main(){
  const [isLogin, setIsLogin] = useState(false);
  useEffect(()=>{
    axios({
      url: "/api/",
      method: "GET"
    }).then(res=>{
      setIsLogin(true);
    })
  },[]);
  return(
    <>
    <div className={styles.main}>
      <MainHeader/>
      <div className={styles.main_img}>
        <img src="image/run_back.png" className={styles.runImage}></img>
        {isLogin? 
          <Link to="/record">
            <button className={styles.startbtn}>Get Started</button>  {/*로그인 전엔 /login으로 이동, 후엔 /record로 이동*/}
          </Link>:
          <Link to="/login">
            <button className={styles.startbtn}>Get Started</button>  
          </Link>}    
      </div>
      <Fade bottom>
        <Cards/>
      <div className={styles.tab}>
        <Tab/>
      </div>
      </Fade>
      <Footer/>
      </div>

    </>
  )
}
export default Main;