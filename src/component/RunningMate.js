import React, { useEffect, useState } from "react";
import styles from './RunningMate.module.css';
import {BsFillChatDotsFill, BsSearch, BsFillPersonFill} from 'react-icons/bs';
import Header from "../staticComponent/Header";
import Footer from "../staticComponent/Footer";
import { Link, parsePath } from "react-router-dom";
import LoginWarning from "./LoginWarning";
import axios from "axios";
import Loading from "./Loading";
import { errorSelector, useRecoilState } from "recoil";
import {loginState, userState} from "../staticComponent/state";
function RunningMate(){
  const [login, setLogin] = useRecoilState(loginState);
  const [user, setUser] = useRecoilState(userState);
  const [state, setState] =useState({
    memeberList: [],
  })
  //모든 회원 조회
  useEffect(()=>{
    axios.get('/api/member').then(res=>{
      setState({
        ...state,
        memeberList: res.data.data,
      })
    })
  },[]);
  return(
    <>
      <Header/>
      {login && 
      <div className={styles.mate}>
        <h3>Running Mate</h3>
        <div className={styles.friend}>
          {/* <Link to ="/mateview"> */}
              {state.memeberList.map((el,key)=>{
                return(
                  <div className={styles.friend_box}>
                    <img src="image/profile.png" alt="프로필"></img>
                    <p>이름: {el.name}</p>
                    <Link to ='/mateview' state={{memberName: el.name}}>
                      <p>프로필 더보기</p>
                    </Link>
                    <Link to={`/chat`} state={{room: el.name}}>
                      <button className={styles.chat_btn}>
                        <BsFillChatDotsFill/>
                      </button>
                    </Link>
                  </div>
                )
              })}
              
          {/* </Link> */}
        </div>
      </div>}
      {/* {loading && <Loading/>} */}
      {!login && <LoginWarning/>}
      <Footer/>
    </>
  )
}

export default RunningMate;