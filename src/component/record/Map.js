import React, { useEffect, useRef, useState } from "react";
import { getPosition } from "./getPosition";
const { kakao } = window;
function Map(props) {
  /* navigator.geolocation.getCurrentPosition((obj)=>{
        console.log(obj.coords.latitude, obj.coords.longitude)
      }) */

  useEffect(function () {
    const lat = props.latitude ;
    const lon = props.longitude ;
    const isRecord = props.record;
     const positionArray = props.positionArray || [];
    

    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    if (isRecord) {
      if (positionArray.length !== 0) {
        let linePath = positionArray.map(
          (item) => new kakao.maps.LatLng(item.latitude, item.longitude)
        );

        let polyline = new kakao.maps.Polyline({
          path: linePath, // 선을 구성하는 좌표배열 입니다
          strokeWeight: 5, // 선의 두께 입니다
          strokeColor: "#FFAE00", // 선의 색깔입니다
          strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "solid", // 선의 스타일입니다
        });

        polyline.setMap(map);
      }
    }
    function displayMarker(locPosition, message) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      // var iwContent = message, // 인포윈도우에 표시할 내용
      //   iwRemoveable = true;

      // // 인포윈도우를 생성합니다
      // var infowindow = new kakao.maps.InfoWindow({
      //   content: iwContent,
      //   removable: iwRemoveable,
      // });

      // // 인포윈도우를 마커위에 표시합니다
      // infowindow.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }

    const locPosition = new kakao.maps.LatLng(lat, lon);
    displayMarker(locPosition, "isRunning");
  });
  return (
    <div
      id="map"
      style={{ width: "300px", height: "500px", margin: "auto", border: "1px solid red" }}
    ></div>
  );
}
export default React.memo(Map);
