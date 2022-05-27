import React, { useEffect, useState } from "react";
import Footer from "../staticComponent/Footer";
import Header from "../staticComponent/Header";
import "./MateView.css";
import axios from "axios";
import {userState} from '../staticComponent/state';
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";

function MyRecordView(){
  const [user, setuser] = useRecoilState(userState);
  const location = useLocation();
  const date = location.state.date;
  const [state, setState] = useState({
    recordList: [],
  });
  const [record, setRecord] = useState({
    distance: '',
    speed: '',
    time: '',
    startTime: '',
    endTime: '',
  });
  useEffect(()=>{
    axios({
      method: 'GET',
      url: '/running/',
      params: { memberName: user},
    }).then(res=>{
      console.log(res.data.data);
      setState({
        ...state,
        recordList: res.data.data,
      })
      const [data] = res.data.data;
      setRecord({
        ...record,
        distance: data.distance,
        speed: data.speed,
        time: data.time,
        startTime: data.startTime,
        endTime: data.endTime,
      })
    })
    },[]);

  return(
    <>
    <Header/>
    <div className="mateview">
      <h3><span>{date}</span></h3>
      {state.recordList.map((el,key)=>{
        let hour = Math.floor((el.time / 3600));
        let min = Math.floor((el.time - (hour * 3600))/60);
        let sec = el.time - (hour *3600)-(min*60);
        return(
          <>
        <div className="details">
          <div className="mate_records">
            <p className="record_title">총 런닝 거리</p>
            <p> {el.distance}km</p>
            <p className="record_title">평균 속도</p>
            <p>{el.speed}m/s</p>
            <p className="record_title">총 런닝 시간</p>
            <p>{hour}시 {min}분 {sec}초</p>
          </div>
        </div>
        <div className="details">
          <div className="mate_records">
            <p className="record_title">런닝 시작 시간</p>
            <p>{el.startTime.slice(11,19)}</p>
            <p className="record_title">런닝 종료 시간</p>
            <p>{el.endTime.slice(11,19)}</p>
          </div>
        </div>
        <div className="line"></div>
        </>
        )
      })}
      {/* <div className="map"> 지도 </div> */}
    </div>
    <Footer/>
    </>
  )
}
export default MyRecordView;