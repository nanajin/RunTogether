import React, { useEffect, useState } from "react";
import {BsPlayCircleFill,BsFillStopCircleFill,BsPauseCircleFill} from "react-icons/bs"
import '../component/Record.css'

function Record(){
  const [time, setTime] = useState(0); //시간 나타내주기
  const [onBtn, setOnBtn] = useState(false); //시작 버튼
  const [record, setRecord] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(()=>{
    let interval = null;
    if (onBtn){
      interval = setInterval(()=>{
        setTime(prevTime => prevTime+10) // 최신의 값을 가지게 하기
      },10);
    }
    else{
      clearInterval(interval);     
    }

    return()=> {clearInterval(interval);}
  },[onBtn]);

  const showTime=()=>{
    let hour = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
    let min = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    let sec = ("0" + (time / 10) % 100).slice(-2);
    console.log("현재 기록은: "+ `${hour}:${min}:${sec}`);
    setRecord(record.concat(`${hour}:${min}:${sec}`+"\n"))
    setTime(0);
  }
  
  const showRecord=()=>{
    console.log(record);
  }
  return(
    <>
      <h1>Let's Run Together!</h1>
      <div className="map">지도</div>
      <div className="time">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + (time / 10) % 100).slice(-2)}</span>
      </div>
      <div className="recordButton">
        {!onBtn &&(
          <button className="startButton" onClick={()=>{setOnBtn(true)}}><BsPlayCircleFill/></button>
        )}
        {!onBtn && (
          <button className="stopButton" onClick={showTime}><BsFillStopCircleFill/></button>
        )}
        {onBtn && (
          <button className="pauseButton" onClick={()=>{setOnBtn(false)}}><BsPauseCircleFill/></button>   
        )}
        {!onBtn && (
          <button className="resetButton" onClick={()=>{setTime(0)}}>Reset Time</button>   
        )}    
        {/* {!onBtn&&(
        <button className="recordBtn" onClick={showRecord}>Your Record</button>
        )} */}
        {!onBtn && (
          <button className="recordBtn" onClick={()=>{setRecord([])}}> Reset Record </button>   
        )}   
      </div>
      <div className="record">
          {record}
      </div>
    </>
  )
}

export default Record;