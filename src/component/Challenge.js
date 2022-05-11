import React, { useEffect, useState } from "react";
import Footer from "../staticComponent/Footer";
import Header from "../staticComponent/Header";
import Sliders from "./Slider";
import styles from './Challenge.module.css';
import Tab from "./Tab";
import PayReady from "./kakao/PayReady";
import {Link} from 'react-router-dom';
import CardItem from "./CardItem";
import './Cards.css';
import axios from "axios";

function Challenge(){
  const [user, setUser] = useState("mijin"); //서버 데이터 가져오기
  const grade = "manager";
  const [state, setState] =useState({
    boardList: [],
  })
  useEffect(()=>{
    axios({
      method: "GET",
      url:"/reactBackend/managerlist",
    }).then(res=>{
      const {data} = res;
      setState({
        ...state,
        boardList : data,
      })
    })
  },[]);
  return(
    <>
      <Header/>
      <div className={styles.challenge}>
        <h3>Challenge</h3>
        <p>{user}님이 참여하고 있는 챌린지</p>
        <p>{user}님이 보유하고 있는 챌린지 금액</p>
        <Link to ="/challengeuserpage">유저 게시판</Link>
        <Link to ="/challengemanagerpage">매니저 게시판</Link>
        
        <div className={styles.challenge_cards}>
        {state.boardList.map((el,key)=>{
          // const view_url = "/challengeview/manager/" + el.id;
           
          return(
            <>
                <div className={styles.challenge_container}>
                  <CardItem
                    src={el.filename? require(`../../backend/uploadImg/${el.filename}`): "/image/challenge.png"}
                    text= {el.title}
                    label='진행중'
                    // path={view_url}
                    state={{
                      id: el.id,
                      title: el.title,
                      contents: el.contents,
                      filename: el.filename,
                      count: el.view_cnt
                    }}
                  />
                </div>
            </>
          )
        })}
        </div>
        

        <div className={styles.myChallenge}>myChallenge</div>
        <div className={styles.challengeContent}>
          <Sliders/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Challenge;