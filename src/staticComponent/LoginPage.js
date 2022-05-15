import React, { useEffect, useRef, useState } from "react";
import {Link, Navigate, Redirect, useNavigate} from 'react-router-dom';
import LoginModal from "../component/LoginModal";
import Headers from "./Header"
import Footer from "./Footer";
import axios from "axios";
import Login from "../component/login/Login.js";
function LoginPage(props){
  const [isModalOn, setIsModalOn] = useState(false);
  const HandleModal = (active)=>{
    setIsModalOn(active);
  };
  
  useEffect(()=>{
    console.log("Loading...");
  });

  return(
    <>
      <Headers/>
      {/* <h1>로그인 페이지입니다</h1>
        <button onClick={()=>{HandleModal(true)}}>로그인</button>
        <Link to="/">
        <button >돌아가기</button>
        </Link>
      <div>
        {isModalOn && <LoginModal setIsModalOn={setIsModalOn}/>}

      </div> */}
      <Login/>
      <Footer/>
    </>
  );
}
export default LoginPage;