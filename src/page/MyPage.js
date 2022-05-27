import React, { useEffect, useState } from "react";
import Footer from "../staticComponent/Footer";
import Header from "../staticComponent/Header";
import './MyPage.css';
import {userState} from '../staticComponent/state';
import { useRecoilState } from "recoil";
import LoginWarning from "../component/LoginWarning";
import axios from "axios";

function MyPage(){
  const [user, setUser] = useRecoilState(userState);
  useEffect(()=>{
    axios({
      method: 'GET',
      url: `/running/`,
      params: {
        memberName: user,
      }
    }).then(res=>{
      console.log(res.data);
    }).catch(e=>{
      alert(e)
    });
  },[]);

  return(
    <>
    <Header/>
    {user ?
    <div className="mypage">
      <h3>MyPage</h3>
      <p>프로필</p>
      <p>환영합니다 {user}님</p>
      <p>최근 런닝 기록</p>
      
      <p>탭 클릭하면 맵 라인과 기록 뜸</p>
      <p>회원정보 수정은 시간있으면 하자...</p>
    </div>: <LoginWarning/>}
    <Footer/>
    </>
  )
}
export default MyPage;