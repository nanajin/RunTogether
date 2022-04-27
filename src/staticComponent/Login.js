import React, { useEffect, useRef, useState } from "react";
import {Link, Navigate, Redirect, useNavigate} from 'react-router-dom';
import LoginModal from "../component/LoginModal";
import Headers from "./Header"
import Footer from "./Footer";
import axios from "axios";

function Login(props){
  const [isModalOn, setIsModalOn] = useState(false);
  const outSection = useRef();

  const HandleModal = (active)=>{
    setIsModalOn(active);
  };
  // const joinHandler=()=>{
  //   try{
  //     let data = {email: "js@naver.com"};
  //     axios.post("/api/login", JSON.stringify(data),
  //     {headers: {"Content-Type": `application/json`}})
  //     .then(res => {
  //       console.log("res.data.accessToken: " +res.data);
  //       axios.defaults.headers.common[`Authorization`] = `Bearer ` + res.data;
  //       props.loginCallBack(true);
  //       // props.history.push("/");
  //       // props.setIsLogin(true);
  //     })
  //     .catch(err=>{
  //       console.log("login request fail: " + err);
  //     })
  //     .finally(()=>{console.log("login request end")});
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // }
  useEffect(()=>{
    console.log("Loading...");
  });

  return(
    <>
      <Headers/>
      <h1>로그인 페이지입니다</h1>
        <button onClick={()=>{HandleModal(true)}}>로그인</button>
        <Link to="/">
        <button >돌아가기</button>
        </Link>
        {/* <button onClick={joinHandler}>Join</button> */}
      <div>
        {isModalOn && <LoginModal setIsModalOn={setIsModalOn}/>}
        {/* {isModalOn && props.isModalOn} */}

      </div>

      {/* {setIsModalOn === true? 
        (<div className="modal-outside" ref={outSection}
          onClick={(e)=>{
            if(outSection.current === e.target) 
              setIsModalOn(false)
            }}></div>) : null
      } */}

      <Footer/>
    </>
  );
}
export default Login;