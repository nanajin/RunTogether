import React, { ReactEventHandler, useEffect, useState, useRef } from "react";
import Map from "./Map";
import styles from "./Run.module.css";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BsStopCircle } from "react-icons/bs";
import { clearWatch, getPosition, getWatchPosition } from "./getPosition";
import { getDistance } from "./getDistance";
import Running10m from "./Running10m";
import { useRecoilState } from "recoil";
import {userState, loginState} from '../../staticComponent/state';
import LoginWarning from '../LoginWarning';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ChargeMoney from "../kakao/ChargeMoney";

function Run() {
  const [user, setUser] = useRecoilState(userState);
  const [login, setLogin] = useRecoilState(loginState);
  const {state} = useLocation(); // 참여한 챌린지 아이디
  const [challengeTitle, setChallengeTitle] = useState('');
  useEffect(()=>{
    if(state){
      axios.get(`/challenge/${state}`).then(res=>{
        setChallengeTitle(res.data.data.title);
      });
    }
  });

  const [propDistance, setPropDistance] = useState(0);
  const [controller, setController] = useState(false);
  const [time, setTime] = useState(0);
  const [dist, setDist] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [position, setPosition] = useState({
    latitude: 35.17688579, 
    longitude: 126.90480417,
  });
  const [posArray, setPosArray] = useState([]);
  const [running10mData, setRunning10mData] = useState([]);
  const timeRecord = useRef(null);
  const geoRecord = useRef(null);

  const getCurrentPosition = async (e) => {
    const {
      coords: { latitude, longitude },
    } = await getPosition();
    setPosition({ latitude, longitude });
    console.log("current Position : ", latitude, longitude);
  };
  useEffect(() => {
    getCurrentPosition();
  }, []);
  useEffect(() => {
    if (controller) {
      if (dist !== 0) {
        setSpeed(Math.round(((dist * 1000) / time) * 100) / 100);
      }
      if (time % 10 === 0) {
        if (running10mData.length === 0) {
          setRunning10mData([{ dist: dist, speed: speed }]);
        } else {
          setRunning10mData((prev) => [
            ...prev,
            {
              dist: dist - prev[prev.length - 1].dist,
              speed:
                Math.round(((dist - prev[prev.length - 1].dist) / 60) * 100) /
                100,
            },
          ]);
        }
        console.log("filtered");
        console.log(running10mData.map((item) => item.speed));
      }
    }
  }, [time]);

  useEffect(() => {
    if (controller) {
      setPosArray((prev) => [...prev, position]);
      console.log("posarray");
      console.log(posArray); //선 그리는데 필요함
      const posLen = posArray.length;
      if (posLen > 1) {
        setDist(
          (prev) =>
            prev + getDistance(posArray[posLen - 1], posArray[posLen - 2])
        );
      }
    }
  }, [position]);
  useEffect(() => {
    if (controller) {
      let tr = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      
      return () => {
        setPosition({
          latitude: 35.17834096, longitude: 126.90929059
        });
        setTime(0);
        setDist(0);
        setSpeed(0);
        clearInterval(tr);
        setPosArray([]);
        console.log('리턴 값');
      };
    }
  }, [controller]);

  const getStart = (e) => {
    setController(true);
    setPosition({ latitude: 35.17834096, longitude: 126.90929059 }); //35.5, 127.1
    console.log("before watchposition");
    console.log(position);
    geoRecord.current = navigator.geolocation.watchPosition((success) => {
      console.log("watchposition");
      // console.log(new Date());
      const { latitude, longitude } = success.coords;
      setPosition({ latitude, longitude });
      console.log(position);
    });
  };
  const getPause = function () {};

  const getStop = function () {
    setController(false);
    clearInterval(timeRecord.current);
    navigator.geolocation.clearWatch(geoRecord.current);
    console.log(`시간: ${time}, 거리: ${dist}, 속도: ${speed}`);
    axios({
      method: 'POST',
      url: '/running/complete',
      data: {
        time: time,
        distance: dist,
        speed: speed,
      }
    }).then(res=>{
      alert(res.data.message);
      if(challengeTitle){
        if(window.confirm("기부에 참여하시겠습니까?")){
          HandleModal(true);
        }
        else{
          alert('참여해주셔서 감사합니다.');
        }
      }
    });
    setPropDistance(dist);
  };
  let hour = Math.floor((time / 3600));
  let minute = Math.floor((time - (hour * 3600))/60);
  const [isModalOn, setIsModalOn] = useState(false);
  const HandleModal = (active)=>{
    setIsModalOn(active);
  }

  return (
    <>
    {login?
      <>
      <div className={styles.center}>
        <h3>Record Running</h3>
        <p><span>{user}</span>님의 러닝</p>
        {challengeTitle &&<p>챌린지 "<span>{challengeTitle}</span>" 참여 중입니다</p>}
        <table className={styles.runState}>
          <thead>
            <tr>
              <th>누적 거리</th>
              <th>현재 속도</th>
              <th>누적 시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dist}km</td>
              <td>{speed}m/s</td>
              {/* <td>{time}초</td> */}
              <td>
                <span>{("0" + hour)}:</span>
                <span>{("0" + minute)}:</span>
                <span>{("0" + time - (hour *3600)-(minute*60))}</span>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Map
        latitude={position.latitude}
        longitude={position.longitude}
        record={controller}
        positionArray={posArray}
      />
      <div className={styles.controller}>
        {!controller ? (
          <AiFillPlayCircle size="2.5rem" cursor='pointer' onClick={getStart} />
        ) : (
          <>
            <AiFillPauseCircle size="2.5rem" cursor='pointer' onClick={getPause} />
            <BsStopCircle size="2.5rem" cursor='pointer' onClick={getStop} />
          </>
        )}
        {isModalOn && <ChargeMoney setIsModalOn={HandleModal} distance={propDistance}/>}

      </div>
      <Running10m speed10mArray={running10mData.map((item) => item.speed)} />
    </>
    : <LoginWarning/>}
    </>
  );
}

export default React.memo(Run);
