import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styles from '../staticComponent/Header.module.css';
import {BsList, BsXLg, BsFillPersonFill} from 'react-icons/bs';
import axios from "axios";
import { useRecoilState } from "recoil";
import loginState from "./state";

function Header(props){
  const [toggle, setToggle] = useState(false); //미디어 버전
  const [headerLine, setHeaderLine] = useState(true);
  const [login, setLogin] = useRecoilState(loginState);

  const onLogout =()=>{
    axios({
      url:"/api/logout",
      method:"POST",
      
    }).then(res=>{
      console.log(res);
      setLogin(false);
    })
  }
  
  useEffect(()=>{
    if(props.line === "false"){
      setHeaderLine(false);
    }
  },props);
 
  return(
    <>
      <div className={toggle? `${styles.main_container} ${styles.active}`: styles.main_container}>
          <Link to='/' onClick={()=>{setToggle(false)}}>
            <button className={styles.main_logo}>Run Together</button>
          </Link>
          <ul className= {toggle ?`${styles.header_menulist} ${styles.active}`: styles.header_menulist}>
              <li className={styles.nav_item}>
                <Link to = '/challenge'>Challenge</Link>
              </li>
              <li className={styles.nav_item}>
                <Link to = '/mate'>Mate</Link>
              </li>
              <li className={styles.nav_item}>
                <Link to = '/'>Community</Link>
              </li>
              <li className={styles.nav_item}>
                <Link to = '/record'>Record</Link>
              </li>
          </ul>
        {login?
          <ul className= {toggle ?`${styles.header_user} ${styles.active}`: styles.header_user}>
            <li className={styles.nav_item}>
              <Link to = '/mypage'>Mypage</Link>
            </li>
            <li className={styles.nav_item}>
              <button onClick={onLogout} className={styles.logout_btn}> Logout </button>
            </li>  
          </ul>:
          <ul className= {toggle ?`${styles.header_user} ${styles.active}`: styles.header_user}>
            <li className={styles.nav_item}>
              <Link to = '/login'>Login</Link>
            </li>
            <li className={styles.nav_item}>
              <Link to = '/signup'>Sign Up</Link>
            </li>  
          </ul>}
        
          <button className={toggle? styles.none: styles.list_icon} onClick={()=>{setToggle(true)}}>
            <BsList/>
          </button>
          <button className={toggle? styles.x_icon: styles.none} onClick={()=>{setToggle(false)}}>
            <BsXLg/>
          </button>
      </div>
      {headerLine ? <div className={styles.line}></div>: null}
    </>
  )
}
export default Header;