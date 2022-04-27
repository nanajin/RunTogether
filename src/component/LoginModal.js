import { useState,useRef, useEffect } from "react";
import styles from "../component/LoginModal.module.css";
import {Link, useNavigate} from 'react-router-dom';
import App from "./App";
import Login from "../staticComponent/Login";
import axios from "axios";
import { BsXLg } from 'react-icons/bs';
import { getUser } from "./apicache/Cachestored";

//로그인 모달 페이지
function LoginModal(props){

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const onSubmitBtn=()=>{ 
    axios.post('/api/login',{
      "email": email,
      "pwd": pwd
    }).then((res)=>{
      console.log(res);
    }).catch(e=>{
      console.log(e);
    });
  };
  const modalOff=()=>{
    props.setIsModalOn(false);
  };

  const handleInputEmail =(e)=>{
    setEmail(e.target.value);
  }
  const handleInputPwd =(e)=>{
    setPwd(e.target.value);
  }

  return(
    <>
    <div className={styles.login}>
      <h3>Welcome to Run Together!</h3>
      <p className={styles.title}>Login</p>
        <label className={styles.id}>
          <input type="email" placeholder="EMAIL" onChange={handleInputEmail}/>
        </label>
        <br></br>
        <label className={styles.pw}>
          <input type="password" placeholder="PASSWORD" onChange={handleInputPwd}/>
        </label>
        <button onClick={onSubmitBtn}>Login</button>
        <button onClick={modalOff} className={styles.x}>
          <BsXLg/>
        </button>
        <br></br>  
    </div>
    </>
  );
}
export default LoginModal;