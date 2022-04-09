import React, { useEffect, useState } from "react";
import {Link, Redirect} from 'react-router-dom';
import MainPage from '../page/MainPage';
import LoginModal from "../component/LoginModal";
import Follow from "./Follow";
import Headers from "../staticComponent/Header"
import Footer from "../staticComponent/Footer";
function Login(){
  const [isModalOn, setIsModalOn] = useState(false);
  const HandleModal = (active)=>{
    setIsModalOn(active);
  }
 
  return(
    <>
      <Headers/>
      <h1>로그인 페이지입니다</h1>
        <button onClick={()=>{HandleModal(true)}}>로그인</button>
        <Link to="/">
        <button >돌아가기</button>
        </Link>
      <div>
        {/* {isModalOn && <BodyBlackoutStyle HandleModal={HandleModal}/>} */}
        {isModalOn && <LoginModal setIsModalOn={setIsModalOn}/>}
      </div>
      <Footer/>
    </>
  );
}
export default Login;