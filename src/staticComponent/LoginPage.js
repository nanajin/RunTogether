import React, { useEffect, useRef, useState } from "react";
import {Link, Navigate, Redirect, useNavigate} from 'react-router-dom';
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
      <Login/>
      <Footer/>
    </>
  );
}
export default LoginPage;