import React, { useEffect, useState } from "react";
import Footer from "../staticComponent/Footer";
import Header from "../staticComponent/Header";
import "./MateView.css";
import axios from "axios";
import {userState} from '../staticComponent/state';
import { useRecoilState } from "recoil";
import { Link, useLocation } from "react-router-dom";
import Map from "./record/Map";

function MateView(){
  const location = useLocation();
  const memberName = location.state.memberName;
  const [record, setRecord] = useState({
    distance: '',
    speed: '',
    time: '',
    startTime: '',
    endTime: '',
    posArray: '',
  });
  useEffect(()=>{
    axios({
      method: 'GET',
      url: '/running/',
      params: { memberName: memberName},
    }).then(res=>{
      console.log(res.data.data);
      const [data] = res.data.data;
      setRecord({
        ...record,
        distance: data.distance,
        speed: data.speed,
        time: data.time,
        startTime: data.startTime,
        endTime: data.endTime,
        posArray: JSON.parse(data.polyline),
      })
    })
    },[]);
    // const posArray = [{latitude:35.123456, longitude:126.564},
    //   {latitude:35.223456, longitude:126.664},
    //   {latitude:35.323456, longitude:126.764},
    //   {latitude:35.423456, longitude:126.864}];

    let hour = Math.floor((record.time / 3600));
    let min = Math.floor((record.time - (hour * 3600))/60);
    let sec = record.time - (hour *3600)-(min*60);

  return(
    <>
    <Header/>
    <div className="mateview">
      <h3><span>{memberName}</span>님의 최근 런닝 기록</h3>
      {record.time !== ''?
      <div className="details">
        <p>{record.startTime.slice(0,10)}</p>
        <div className="mate_records">
          <p className="record_title">총 런닝 거리</p>
          <p> {record.distance}km</p>
          <p className="record_title">평균 속도</p>
          <p>{record.speed}m/s</p>
          <p className="record_title">총 런닝 시간</p>
          <p>{hour}시 {min}분 {sec}초</p>
        </div>
        <div className="details">
          <div className="mate_records">
            <p className="record_title">런닝 시작 시간</p>
            <p>{record.startTime.slice(11,19)}</p>
            <p className="record_title">런닝 종료 시간</p>
            <p>{record.endTime.slice(11,19)}</p>
          </div>
        </div>
        <div className="view_map">
          <Map latitude={record.posArray[0].latitude}  
            longitude={record.posArray[0].longitude} 
            record={true} positionArray={record.posArray} 
            />
        </div>
      </div>:
      <div className="none_record_view">
        <p>!기록이 존재하지 않습니다!</p>
        <Link to ='/mate'>돌아가기</Link>
      </div>
      }
      {/* <div className="map"> 지도 </div> */}
    </div>
    <Footer/>
    </>
  )
}
export default MateView;