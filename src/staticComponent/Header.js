import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../staticComponent/NavBar.css';
import '../staticComponent/Header.css';
import {BsList, BsXLg, BsFillPersonFill} from 'react-icons/bs';

function Header(){
  const [toggle, setToggle] = useState(false); //미디어 버전
  // const [header, setHeader] = useState(false);

  return(
    <>
      <div className={toggle?"main-container active":"main-container"}>
          <Link to='/' onClick={()=>{setToggle(false)}}>
            <button className="main-logo">Run Together</button>
          </Link>
          <ul className= {toggle ?'header-menulist active':'header-menulist'}>
              <Link to ='/challenge'>
                <li className="nav-item">Challenge</li>
              </Link>
              <Link to ='/' >
                <li className="nav-item">Mate</li>
              </Link>
              <Link to ='/'>
                <li className="nav-item">Community</li>
              </Link>
              <Link to ='/record'>
                <li className="nav-item">Record</li>
              </Link>
          </ul>

          <ul className= {toggle ?'header-user active':'header-user'}>
            <Link to ='/login'>
              <li className="nav-item">Login</li>
            </Link>
            <Link to ='/signup'>
              <li className="nav-item">Sign Up</li>
            </Link>
          </ul>
          
          {/* <button className={toggle?"none":"person-icon"} onClick={()=>{setToggle(true)}}>
            <BsFillPersonFill/>
          </button> */}
          <button className={toggle?"none":"list-icon"} onClick={()=>{setToggle(true)}}>
            <BsList/>
          </button>
          <button className={toggle?"x-icon":"none"} onClick={()=>{setToggle(false)}}>
            <BsXLg/>
          </button>
      </div>
      
      <div className={toggle?"none":"line"}></div>
    </>
  )
}
export default Header;