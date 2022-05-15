import React from "react";
import Footer from "../staticComponent/Footer";
import Header from "../staticComponent/Header";
import "./MateView.css";

function MateView(){
  return(
    <>
    <Header/>
    <div className="mateview">
      <h3>~~님의 런닝 기록</h3>
      <div className="details">
        <div className="mate_records">
          <p className="record_title">런닝 시작 시간</p>
          <p>12:00:00</p>

          <p className="record_title">총 런닝 거리</p>
          <p>0.6 km</p>

          <p className="record_title">평균 속도</p>
          <p>0.74 m/s</p>
        </div>
        <div className="mate_records">
          <p className="record_title">런닝 종료 시간</p>
          <p>12:05:00</p>
          <p className="record_title">총 런닝 시간</p>
          <p>5 M</p>
        </div>
      </div>
      <div className="map"> 지도 </div>
    </div>
    <Footer/>
    </>
  )
}
export default MateView;