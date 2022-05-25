import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styles from './MainHeader.module.css';
import {BsList, BsXLg, BsFillPersonFill} from 'react-icons/bs';
import axios from "axios";
import {useRecoilState} from 'recoil';
import {loginState, userState} from "./state";

function MainHeader(){
  const [toggle, setToggle] = useState(false); //미디어 버전
  const [login, setLogin] = useRecoilState(loginState);
  const [user, setUser] = useRecoilState(userState);
  
  const onLogout = async ()=>{
    if(window.confirm('로그아웃 하시겠습니까?')){
      await axios({
        url:"/api/logout",
        method:"POST",       
      }).then(res=>{
        alert('로그아웃 되었습니다');
        // localStorage.clear();
        setLogin(false);
        setUser('');
      })
    }
  }
  
  return(
    <>
    {!login?
      <ul className= {toggle ?`${styles.header_user} ${styles.active}`: styles.header_user}>
            <li className={styles.nav_item}>
              <Link to = '/login'>Log In</Link>
            </li>
            <li className={styles.nav_item}>
              <Link to = '/signup'>Sign Up</Link>
            </li>  
      </ul> :

      <ul className= {toggle ?`${styles.header_user} ${styles.active}`: styles.header_user}>
        <li className={styles.nav_item}>
          <p><span>{user}</span>님 환영합니다</p>
        </li>
        <li className={styles.nav_item}>
          <Link to = '/mypage'>Mypage</Link>
        </li>
        <li className={styles.nav_item}>
          <button onClick={onLogout} className={styles.logout_btn}> Logout </button>
        </li>  
      </ul>}

      <div className={toggle? `${styles.main_container} ${styles.active}`: styles.main_container}>
          
          <div className={styles.main_logo}>Run Together</div>
          <div>
          <ul className= {toggle ?`${styles.header_menulist} ${styles.active}`: styles.header_menulist}>
              <li className={styles.nav_item}>
                <Link to = '/challenge'>Challenge</Link>
              </li>
              <li className={styles.nav_item}>
                <Link to = '/mate'>Mate</Link>
              </li>
              <li className={styles.nav_item}>
                <Link to = '/record'>Record</Link>
              </li>
              <li className={styles.nav_item}>
                <Link to = '/about'>About</Link>
              </li>
          </ul>

          </div>
          <button className={toggle? styles.none: styles.list_icon} onClick={()=>{setToggle(true)}}>
            <BsList/>
          </button>
          <button className={toggle? styles.x_icon: styles.none} onClick={()=>{setToggle(false)}}>
            <BsXLg/>
          </button>
      </div>
    </>
  )
}
export default MainHeader;