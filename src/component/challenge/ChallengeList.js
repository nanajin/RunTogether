import React, { useEffect, useState } from "react";
import "./ChallengeList.css";
import Header from "../../staticComponent/Header";
import Footer from "../../staticComponent/Footer";
import axios from "axios";
import {BsPencilFill} from 'react-icons/bs';
import { Link } from "react-router-dom";

function ChallengeList(){

  const [state, setState] =useState({
    boardList: [],
  })
  const [count, setCount] = useState(0);

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

useEffect(()=>{
  axios({
      method: "POST",
      url: "/reactBackend/count",
      data: {
        // id: el.id,
        // view_cnt: el.view_cnt,
        view_cnt: count,
      }
    }).then(res=>{
      console.log(res);
    }).catch(e=>{
      console.log(e);
    });
  }, count);
  
  return(
    <>
    <Header/>
    <div className="challengelist">
      <h2>챌린지 제안 게시판</h2>
      <Link to="/challengewrite" className="pen">
        <BsPencilFill/>
      </Link>
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
            const view_url = '/challengeview/' + el.id;
            return(
              <>
                <tr>
                  <td> 
                    <Link to ={view_url} className="title_link" onClick={()=>{setCount(count+1)}}> 
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