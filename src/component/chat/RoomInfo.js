import React from "react";
import { Link } from "react-router-dom";
import "./RoomInfo.css";
import {BsXLg} from 'react-icons/bs';
import Button from "@material-ui/core/Button";

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
        {/* <Button
          className="infoButton"
          // variant="contained"
          variant="raised"
          href="/mate"
          color="inherit"
        >
          close
        </Button> */}
      </div>
    </div>
  );
}

export default RoomInfo;