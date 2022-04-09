import React, { useState } from "react";
import {Link} from 'react-router-dom';
import '../component/Main.css';
import Sliders from "../component/Slider";
import Footer from "../staticComponent/Footer";
import Follow from "./Follow";
import Tab from "./Tab";

function Main(){
  
  return(
    <div className="mainBackground">
      <div className="main_login">
        <Link to = '/login'>
          <button className="m-login-btn">로그인(Login)</button>
        </Link>
        <p>아직 회원이 아니십니까?</p>
        <Link to = '/signup'>
          <button className="m-signup-btn">회원가입(Sign Up)</button>
        </Link>
        <Follow/>
      </div>
      <div className="left">
        <Sliders/>
        <Tab/>
      </div>
      <Footer/>
    </div>
  )
}
export default Main;