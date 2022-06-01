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

const getPositionPerSec = 5;
let i = 0
const joojakArray = [
  {latitude: 35.17848821625093, longitude: 126.90962735369249},
  {latitude: 35.17853337407792, longitude: 126.90974806408376},
  {latitude: 35.178565056362416, longitude: 126.90992916969292},
  {latitude: 35.17845244401161, longitude: 126.91000614134862},
  {latitude: 35.178281235332584, longitude: 126.91007219913654},
  {latitude: 35.17815961746964, longitude: 126.91016015840167},

  {latitude: 35.17800193310333, longitude: 126.9102316898314},
  {latitude: 35.17786228393666, longitude: 126.91031417929818},
  {latitude: 35.17772713336816, longitude: 126.91038568543856},
  {latitude: 35.17761451665191, longitude: 126.91045716663126},
  {latitude: 35.17741629134632, longitude: 126.91055618659274},
  {latitude: 35.17740727778687, longitude: 126.91055619646598},
  {latitude: 35.17726311755432, longitude: 126.91063320068926},
  {latitude: 35.177317320291856, longitude: 126.91079781215167},

]


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
  const [runningId, setRunningId] = useState(0);

  const [propDistance, setPropDistance] = useState(0);
  const [controller, setController] = useState(false);
  const [time, setTime] = useState(0);
  const [dist, setDist] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [position, setPosition] = useState({
    latitude: 0, 
    longitude: 0,
  });
  const [posArray, setPosArray] = useState([]);
  const [running10mData, setRunning10mData] = useState([]);
  const timeRecord = useRef(null);
  const geoRecord = useRef(null);

  const getCurrentPosition = async (e) => {
    // const {
    //   coords: { latitude, longitude },
    // } = await getPosition();
    setPosition({ latitude:35.17837541970289, longitude:126.9094573165221 });
    //console.log("current Position : ", latitude, longitude);
  };
  useEffect(() => {
    getCurrentPosition();
  }, []);

  useEffect(() => {
    if (controller) {
      // if(time % getPositionPerSec === 0){
      //   getCurrentPosition()
      //   console.log(`getPositionPer${getPositionPerSec}Sec`)
      // }
      if (dist !== 0) {
        setSpeed(Math.round(((dist * 1000) / time) * 100) / 100);
      }
      if(time % 5 === 0){
        setPosition({latitude:joojakArray[i].latitude, longitude:joojakArray[i].longitude})
        i += 1
        if (i >13){
          i = 13;
        }
      }
      if (time % 10 === 0) {
        if (running10mData.length === 0) {
          setRunning10mData([{ dist: dist, speed: speed }]);
        } else {
          // setRunning10mData((prev) => [
          //   ...prev,
          //   {
          //     dist: dist - prev[prev.length - 1].dist,
          //     speed:
          //       Math.round(((dist - prev[prev.length - 1].dist) / 60) * 100) /
          //       100,
          //   },
          // ]);
          setRunning10mData([...running10mData,{dist,speed}])
        }
        console.log("filtered");
        console.log(running10mData.map((item) => item.speed));
      }
    }
  }, [time]);

  useEffect(() => {
    if (controller) {
      setPosArray((prev) => [...prev, position]);
      // setPosArray([
      //   {latitude: 35.17837541970289, longitude: 126.9094573165221},
      //   {latitude: 35.17848821625093, longitude: 126.90962735369249},
      //   {latitude: 35.17853337407792, longitude: 126.90974806408376},
      //   {latitude: 35.178565056362416, longitude: 126.90992916969292},
      //   {latitude: 35.17845244401161, longitude: 126.91000614134862},
      //   {latitude: 35.178281235332584, longitude: 126.91007219913654},
      //   {latitude: 35.17815961746964, longitude: 126.91016015840167},
      //   {latitude: 35.17800193310333, longitude: 126.9102316898314},
      //   {latitude: 35.17786228393666, longitude: 126.91031417929818},
      //   {latitude: 35.17772713336816, longitude: 126.91038568543856},
      //   {latitude: 35.17761451665191, longitude: 126.91045716663126},
      //   {latitude: 35.17741629134632, longitude: 126.91055618659274},
      //   {latitude: 35.1772766297939, longitude: 126.91084169480027},
      //   {latitude: 35.177344393300864, longitude: 126.91016015840167},
      //   {latitude: 35.17743472657172, longitude: 126.9111105588342},
      // ])
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
      setPosArray((prev) => [...prev, position]);
      let tr = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      
      return () => {
        getCurrentPosition()
        i=0;
        setRunning10mData([])
        setTime(0);
        setDist(0);
        setSpeed(0);
        clearInterval(tr);
        setPosArray([]);
      };
    }
  }, [controller]);

  const getStart = (e) => {
    setController(true);
    //setPosition({ latitude: 35.17834096, longitude: 126.90929059 }); //35.5, 127.1
    console.log("before watchposition");
    console.log(position);
    /* geoRecord.current = navigator.geolocation.watchPosition((success) => {
      console.log("watchposition");
      // console.log(new Date());
      const { latitude, longitude } = success.coords;
      setPosition({ latitude, longitude });
      console.log(position);
    }); */
  };
  const getPause = function () {};

  const getStop = function () {
    setController(false);
    clearInterval(timeRecord.current);
    // navigator.geolocation.clearWatch(geoRecord.current);
    console.log(`시간: ${time}, 거리: ${dist}, 속도: ${speed}`);
    axios({
      method: 'POST',
      url: '/running/complete',
      data: {
        time: time,
        distance: dist,
        speed: speed,
        polyline: JSON.stringify(posArray),
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
      axios({
        method: 'GET',
        url: `/running/`,
        params: {
          memberName: user,
        }
      }).then(res=>{
        setRunningId(res.data.data[0].runningId); // 가장 최근 기록 runningId 얻기
      });
    });
   console.log(`아이디: ${runningId}`);
  //  console.log(`거리: ${running10mData.dist}`);
  //  console.log(`속도: ${running10mData.map(el=> console.log(el.speed))}`);
  console.log(running10mData)
   console.log(running10mData.map((item) => item.speed));
   console.log(running10mData.map((item) => item.dist));


    if(runningId !== 0) //10분 간격 레코드 저장
      {axios({
        method: 'POST',
        url: `/running/record/${runningId}`,
        data: {
          recordDtoList: running10mData,
        }
      }).then(res=>{
        console.log(res.data);
      })}

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
    {login && position.latitude !== 0?
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
    : !login? <LoginWarning/> : <>Loading...</>}
    </>
  );
}

export default React.memo(Run);
