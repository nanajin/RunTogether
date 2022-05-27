import React, { useEffect, useState } from "react";
import Footer from "../staticComponent/Footer";
import Header from "../staticComponent/Header";
import './MyPage.css';
import state, {userState} from '../staticComponent/state';
import { useRecoilState } from "recoil";
import LoginWarning from "../component/LoginWarning";
import axios from "axios";
import { Link } from "react-router-dom";

function MyPage(){
  const [user, setUser] = useRecoilState(userState);
  let dateArr = [];
  let uniqueArr = [];
  const [state, setState] = useState({
    dateList: [],
  });
  useEffect(()=>{
    axios({
      method: 'GET',
      url: '/running/',
      params: {
        memberName: user,
      }
    }).then(res=>{
      setState({
        ...state,
        dateList: res.data.data,
      })
    }).catch(e=>{
      alert(e)
    });
  },[]);
  let timeArr = 0;
  let t = 0;
  if(state.dateList.length>0){
    timeArr = state.dateList.map((el=>{
      return el.time;
    }));
    timeArr.forEach(e => { t += e })
  }
    let hour = Math.floor((t / 3600));
    let min = Math.floor((t - (hour * 3600))/60);
    let sec = t - (hour *3600)-(min*60);

  return(
    <>
    <Header/>
    {user ?
    <div className="mypage">
      <h3>MyPage</h3>
      <p>프로필</p>
      <p>이름</p>
      <p>{user}</p>
      <p>누적 런닝 시간</p>
      <p>{hour}시 {min}분 {sec}초</p>
      <p>총 런닝 횟수</p>
      <p>{state.dateList.length}회</p>
      <p><span>{user}</span>님의 런닝 기록</p>
      {state.dateList.length > 0 ?
      <div className="date_record">
        {state.dateList.map((el,key)=>{
          dateArr.push(el.startTime.slice(0,10));
          // console.log(dateArr);
          const set = new Set(dateArr);
          uniqueArr = [...set];
        })}
        {uniqueArr.map((el,key)=>{
          return(
            <div className="date_box">
              <Link to = '/myrecordview' state={{date: el}}>
                <p><span>{el}</span>의 기록</p>
              </Link>
            </div>
          )
        })}
        
      </div>: 
      <div className="none_record">
          <p>!아직 런닝 기록이 없습니다!</p>
          <Link to ='/record'>런닝하러 가기</Link>
          <br></br>
          <Link to ='/challenge'>챌린지 참여하러 가기</Link>
      </div>
      }
    </div>: <LoginWarning/>}
    <Footer/>
    </>
  )
}
export default MyPage;