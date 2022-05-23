import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../staticComponent/state";
import './Loading.css';
import FadeLoader from "react-spinners/FadeLoader";

function Loading(){
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  if(user!==''){
    navigate('/');
  }
    return(
        <div className="loading">
          <h3>잠시만 기다려주세요</h3>
          <div className="ring-of-dots"></div>         
        </div>
    )
}
export default Loading;