import React, { useEffect, useState } from "react";
import {BsPlayCircleFill,BsFillStopCircleFill,BsPauseCircleFill} from "react-icons/bs"
import styles from '../component/Record.module.css'
import { useRecoilState } from "recoil";
import {loginState} from "../staticComponent/state";
import LoginWarning from "./LoginWarning";

function Record(){
  const [login, setLogin] = useRecoilState(loginState);
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
    {login?
    <>
      <h1>Let's Run Together!</h1>
      <div className={styles.map}>지도</div>
      <div className={styles.time}>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + (time / 10) % 100).slice(-2)}</span>
      </div>
      <div className={styles.recordButton}>
        {!onBtn &&(
          <button className={styles.startButton} onClick={()=>{setOnBtn(true)}}><BsPlayCircleFill/></button>
        )}
        {!onBtn && (
          <button className={styles.stopButton} onClick={showTime}><BsFillStopCircleFill/></button>
        )}
        {onBtn && (
          <button className={styles.pauseButton} onClick={()=>{setOnBtn(false)}}><BsPauseCircleFill/></button>   
        )}
        {!onBtn && (
          <button className={styles.resetButton} onClick={()=>{setTime(0)}}>Reset Time</button>   
        )}    
        {/* {!onBtn&&(
        <button className="recordBtn" onClick={showRecord}>Your Record</button>
        )} */}
        {!onBtn && (
          <button className={styles.recordBtn} onClick={()=>{setRecord([])}}> Reset Record </button>   
        )}   
      </div>
      <div className={styles.record}>
          {record}
      </div>
    </>: <LoginWarning/>}
    </>
  )
}

export default Record;