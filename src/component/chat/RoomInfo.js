import React from "react";
import { Link } from "react-router-dom";
import "./RoomInfo.css";
import {BsXLg} from 'react-icons/bs';

function RoomInfo({ room }) {
  return (
    <div className="roomInfo">
      <div className="leftInfo">
        <h3 className="leftInfo-text">{`${room}`}</h3>
      </div>
      <div className="rightInfo">
          <Link to ='/mate'>
            <button className="infoButton"> 
              <BsXLg/> 
            </button>
          </Link>
      </div>
    </div>
  );
}

export default RoomInfo;