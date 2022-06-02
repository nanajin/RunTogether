import React, { useEffect, useState } from "react";
import Footer from "../staticComponent/Footer";
import Header from "../staticComponent/Header";
import "./MateView.css";
import axios from "axios";
import {userState} from '../staticComponent/state';
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import Map from '../component/record/Map'
import LoginWarning from "./LoginWarning";

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
    posArray: '',
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
        posArray: JSON.parse(data.polyline),
      })
    })
    },[]);

    // console.log(`포지션Array: ${record.posArray[0].longitude}`);

    // const posArray = [{latitude:35.123456, longitude:126.564},
    //   {latitude:35.223456, longitude:126.664},
    //   {latitude:35.323456, longitude:126.764},
    //   {latitude:35.423456, longitude:126.864}];

      // JSON.stringify(posArray)

      // JSON.parse( response

  return(
    <>
    <Header/>
    <div className="mateview">
      <h3><span>{date}</span></h3>
      {state.recordList.map((el,key)=>{
        let hour = Math.floor((el.time / 3600));
        let min = Math.floor((el.time - (hour * 3600))/60);
        let sec = el.time - (hour *3600)-(min*60);  
        const posArray = JSON.parse(el.polyline);
        // console.log(typeof(el.polyline));
        // console.log(`포지션: ${posArray}` );
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
          <p>반복하나요?</p>
        <div className="view_map">
          <Map latitude={posArray[0].latitude} 
            longitude={posArray[0].longitude} 
            record={true} positionArray={posArray}
            />
            {/* {posArray.map((el,key)=>{
              console.log(`lat: ${el.latitude}`);
              return(
              <Map latitude={el.latitude} 
              longitude={el.longitude} 
              record={true} positionArray={posArray}
              />)
              
            })} */}
            {/* <Map latitude={record.posArray[0].latitude} 
            longitude={record.posArray[0].longitude} 
            record={true} positionArray={posArray}
            /> */}
        </div>
        <div className="line"></div>
        </>
        )
      })}
    </div>
    <Footer/>
    </>
  )
}
export default MyRecordView;