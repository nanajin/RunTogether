import React, { useEffect, useState } from "react";
import "./ChallengeList.css";
import Header from "../../staticComponent/Header";
import Footer from "../../staticComponent/Footer";
import axios from "axios";
import {BsPencilFill} from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import {useRecoilState} from 'recoil';
import {loginState, userState} from "../../staticComponent/state";
import LoginWarning from "../LoginWarning";
import ErrorPage from "../../page/ErrorPage";

function ChallengeList(props){
  const [login, setLogin] = useRecoilState(loginState);
  const [user, setUser] = useRecoilState(userState);
  const [state, setState] =useState({
    boardList: [],
  })
  
  const navigate = useNavigate();

  useEffect(()=>{
    axios({
      method: "GET",
      url: `/${props.api}/list`
    }).then(res=>{
      setState({
        ...state,
        boardList: res.data.data,
      })
    }).catch(e=>{
      <ErrorPage/>
    })
  },[]);

  return(
    <>
    <Header/>
    <div className="challengelist">
      {props.api === 'board'?
      <h3>챌린지 제안 게시판</h3>:
      <h3>챌린지 등록 게시판</h3>}

      {props.api ==="board" && login ?
        <Link to="/challengewrite" className="pen">
          <BsPencilFill/>
        </Link>:
        <Link to="/challengeadminwrite" className="pen">
          <BsPencilFill/>
        </Link>}
      {state.boardList.length > 0 ? 
      <table className="table">
        <thead> 
          <tr>
              <th className="title">제목</th>
              <th>조회수</th>
              <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {state.boardList.map((el,key)=>{
            const id = (props.api === "board" ? el.boardId: el.challengeId);
            const view_url = `/challengeview/${props.api}` + id;
            return(
              <>
                <tr>
                  <td> 
                    <Link to ={view_url} state={
                      {id: id, api: props.api}} className="title_link"> 
                      {el.title} 
                    </Link> 
                  </td>
                  <td className="count">{el.views}</td>
                  <td className="date">{el.registerDate.slice(0,10)}</td>
                </tr>
              </>
            )
          })}
        </tbody>
        </table>:
        <div className="empty_list">
          <h2>!아직 챌린지가 생성되지 않았습니다!</h2>
          <p>챌린지 제안을 하고싶다면?</p>
          {user==='관리자'?
          <Link to='/challengeadminwrite'>글 작성</Link>:
          <Link to='/challengewrite'>글 작성</Link>}
          <br></br>
          <br></br>
          <Link to='/'>홈으로 이동</Link>
        </div>}
          
      
    </div>
    <Footer/>
    </>
  )
}
export default ChallengeList;