import React, { useEffect, useState } from "react";
import "./ChallengeList.css";
import Header from "../../staticComponent/Header";
import Footer from "../../staticComponent/Footer";
import axios from "axios";
import {BsPencilFill} from 'react-icons/bs';
import { Link } from "react-router-dom";

function ChallengeList(props){
  const [manager, setManager] = useState(false); //관리자 모드
  useEffect(()=>{
    if(props.grade === "manager"){
      setManager(true);
    }
  },[]);
  
  const [state, setState] =useState({
    boardList: [],
  })

  if(manager){
    axios({
      method: "GET",
      url: "/reactBackend/managerlist"
    }).then((res)=>{
      const {data} = res;
      setState({
        ...state,
        boardList : data,
      })
    }).catch(e=>{
      console.log(e);
    });
  }
  else{
    axios({
      method: "GET",
      url: "/reactBackend/list"
    }).then((res)=>{
      const {data} = res;
      setState({
        ...state,
        boardList : data,
      })
    }).catch(e=>{
      console.log(e);
    });
  }
  return(
    <>
    <Header/>
    <div className="challengelist">
      <h2>챌린지 {props.title} 게시판</h2>

      {!manager && 
        <Link to="/challengewrite" className="pen">
          <BsPencilFill/>
        </Link> }
      <table className="table">
        <thead>
          <tr>
              <th className="title">제목</th>
              {!manager && <th>조회수</th>}
              <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {state.boardList.map((el,key)=>{
            const view_url = '/challengeview/' + el.id;
            return(
              <>
                <tr>
                  <td> 
                    <Link to ={view_url} state={
                      {manager: manager, id: el.id, title: el.title, contents: el.contents, filename: el.filename}} className="title_link"> 
                      {el.title} 
                    </Link> 
                    
                  </td>
                  {!manager && <td className="count">{el.view_cnt}</td>}
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