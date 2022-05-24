import React, { ReactEventHandler, useEffect, useState, useRef } from "react";
import Map from "./Map";
import styles from "./Run.module.css";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BsStopCircle } from "react-icons/bs";
import { clearWatch, getPosition, getWatchPosition } from "./getPosition";
import { getDistance } from "./getDistance";
import Running10m from "./Running10m";

function Run() {
  const [controler, setControler] = useState(false);
  const [time, setTime] = useState(0);
  const [dist, setDist] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [position, setPosition] = useState({
    latitude: 35.1768,
    longitude: 126.9098,
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
    if (controler) {
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
    if (controler) {
      setPosArray((prev) => [...prev, position]);
      console.log("posarray");
      console.log(posArray);
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
    if (controler) {
      let tr = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => {
        setPosition({
          latitude: 35.1768,
          longitude: 126.9098,
        });
        setTime(0);
        setDist(0);
        setSpeed(0);
        clearInterval(tr);
        setPosArray([]);
      };
    }
  }, [controler]);

  const getStart = (e) => {
    setControler(true);
    setPosition({ latitude: 35.5, longitude: 127.1 });
    console.log("before watchposition");
    console.log(position);
    geoRecord.current = navigator.geolocation.watchPosition((success) => {
      console.log("watchposition");
      console.log(new Date());
      const { latitude, longitude } = success.coords;
      setPosition({ latitude, longitude });
      console.log(position);
    });
  };
  const getPause = function () {};
  const getStop = function () {
    setControler(false);
    clearInterval(timeRecord.current);
    navigator.geolocation.clearWatch(geoRecord.current);
  };
  return (
    <>
      <div className={styles.center}>
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
              <td>{time}초</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Map
        latitude={position.latitude}
        longitude={position.longitude}
        record={controler}
        positionArray={posArray}
      />
      <div className={styles.controler}>
        {!controler ? (
          <AiFillPlayCircle size="2.5rem" onClick={getStart} />
        ) : (
          <>
            <AiFillPauseCircle size="2.5rem" onClick={getPause} />
            <BsStopCircle size="2.5rem" onClick={getStop} />
          </>
        )}
      </div>
      <Running10m speed10mArray={running10mData.map((item) => item.speed)} />
    </>
  );
}

export default React.memo(Run);
