import React, { useEffect, useState } from "react";
import "./ChallengeList.css";
import Header from "../../staticComponent/Header";
import Footer from "../../staticComponent/Footer";
import axios from "axios";
import {BsPencilFill} from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";

function ChallengeList(props){
  const [state, setState] =useState({
    boardList: [],
  })
  const navigate = useNavigate();
    axios({
      method: "GET",
      url: `/reactBackend/${props.grade}list`
    }).then((res)=>{
      const {data} = res;
      setState({
        ...state,
        boardList : data,
      })
    }).catch(e=>{
      console.log(e);
      navigate('/errorpage', {state: {error: e}})
    });
  
  return(
    <>
    <Header/>
    <div className="challengelist">
      <h3>챌린지 제안 게시판</h3>

      {props.grade ==="manager" ? null :
        <Link to="/challengewrite" className="pen">
          <BsPencilFill/>
        </Link>}
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
            const view_url = `/challengeview/${props.grade}` + el.id;
            return(
              <>
                <tr>
                  <td> 
                    <Link to ={view_url} state={
                      {grade: props.grade, id: el.id, title: el.title, contents: el.contents, filename: el.filename}} className="title_link"> 
                      {el.title} 
                    </Link> 
                  </td>
                  <td className="count">{el.view_cnt}</td>
                  <td className="date">{el.register_date.slice(0,10)}</td>
                </tr>
              </>
            )
          })}
        </tbody>
        </table>
      
    </div>
    <Footer/>
    </>
  )
}
export default ChallengeList;