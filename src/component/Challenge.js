import React, { useEffect, useState } from "react";
import Footer from "../staticComponent/Footer";
import Header from "../staticComponent/Header";
import Sliders from "./Slider";
import styles from './Challenge.module.css';
import {Link} from 'react-router-dom';
import CardItem from "./CardItem";
import './Cards.css';
import axios from "axios";
import Fade from 'react-reveal/Fade';
import LoginWarning from "./LoginWarning";
import { useRecoilState } from "recoil";
import {loginState, userState} from '../staticComponent/state';

function Challenge(){
  const [login, setLogin] = useRecoilState(loginState);
  const [user, setUser] = useRecoilState(userState); //서버 데이터 가져오기
  
  useEffect(()=>{
    console.log(login);
  })
  const [state, setState] =useState({
    boardList: [],
  })
  useEffect(()=>{
    axios({
      method: "GET",
      url:"/challenge/list",
    }).then(res=>{
        setState({
        ...state,
        boardList : res.data.data,
      })
    })
  },[]);

  return(
    <>
      <Header/>
      <div className={styles.challenge}>
        <h3>Challenge</h3>
        <div className={styles.board}>
          <Link to ="/challengeuserpage" className={styles.board_entry}>챌린지 제안 게시판</Link>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {user === '관리자'?
            <Link to ="/challengemanagerpage" className={styles.board_entry}>관리자 게시판</Link>: null}
        </div>
        {/* {login && user !== '관리자' && 
        <p>{user}님이 참여하고 있는 챌린지</p>} */}

        <p> 진행중인 챌린지</p>
        <div className={styles.challenge_cards}>

        {state.boardList.map((el,key)=>{
          // const view_url = "/challengeview/manager/" + el.id;
           
          return(
            <>
                <div className={styles.challenge_container}>
                  <Fade bottom>
                  <CardItem
                    text= {el.title}
                    label='진행중'
                    id= {el.challengeId}
                    count= {el.views}
                    state='challenge_card'
                  />
                  </Fade>
                </div>
            </>
          )
        })}
        </div>
        

        {/* <div className={styles.challengeContent}>
          <Sliders/>
        </div> */}
      </div> 
      {/* <LoginWarning/> */}
      <Footer/>
    </>
  )
}
export default Challenge;