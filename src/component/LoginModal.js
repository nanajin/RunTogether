import { useState,useRef, useEffect } from "react";
import "../component/LoginModal.css";
import {Link} from 'react-router-dom';
import App from "./App";
import Login from "./Login";
import axios from "axios";
import { BsXLg } from 'react-icons/bs';

//로그인 모달 페이지
function LoginModal(props){
  // const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const outSection = useRef();

  const onSubmitBtn=()=>{
    // setLogin(true);
    // props.isLogin(login); //props는 App 컴포넌트랑 소통 중
    axios({
      url: "/api/login", // 백엔드/ baseURL도 설정해주자
      method: "post",
      headers:{"Content-Type": "application/json"},
      data:{
        "email": email,
        "pwd": pwd
      }
    }).then((res)=>{
      console.log(res.data); //data가 access_token 
    }).catch(e=>{
      console.log(e);
    })
  };
  const modalOff=()=>{
    props.setIsModalOn(false);
  };

  return(
    <>
    <div className="login" ref={outSection}>
      <h3>Welcome to Run Together!</h3>
      <p className="title">Login</p>
        <label className="id">
          <input type="email" placeholder="EMAIL" onChange={setEmail}/>
        </label>
        <br></br>
        <label className="pw">
          <input type="password" placeholder="PASSWORD" onChange={setPwd}/>
        </label>
        <button onClick={onSubmitBtn}>Login</button>
        <button onClick={modalOff} className="x-icon" style={{"margin":"auto"}}>
          <BsXLg/></button>
        <br></br>  
    </div>
    {/* <IsLogin login = {login}/> */}
    {/* <div className="modal-outside"
      onClick={(e)=>{
      if(outSection.current === e.target) 
        onSubmitBtn()
        console.log("dddd");
      }}>
    </div> */}
    </>
  );
}
export default LoginModal;