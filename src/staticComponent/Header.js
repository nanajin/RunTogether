import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from '../staticComponent/Header.module.css';
import {BsList, BsXLg, BsFillPersonFill} from 'react-icons/bs';

function Header(){
  const [toggle, setToggle] = useState(false); //미디어 버전
  // const [header, setHeader] = useState(false);

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
                <Link to = '/'>Mate</Link>
              </li>
              <li className={styles.nav_item}>
                <Link to = '/'>Community</Link>
              </li>
              <li className={styles.nav_item}>
                <Link to = '/record'>Record</Link>
              </li>
          </ul>

          {/* <ul className= {toggle ?`${styles.header_user} ${styles.active}`: styles.header_user}>
            <li className={styles.nav_item}>
              <Link to = '/login'>Login</Link>
            </li>
            <li className={styles.nav_item}>
              <Link to = '/signup'>Sign Up</Link>
            </li>
            
           
          </ul> */}
          
          <button className={toggle? styles.none: styles.list_icon} onClick={()=>{setToggle(true)}}>
            <BsList/>
          </button>
          <button className={toggle? styles.x_icon: styles.none} onClick={()=>{setToggle(false)}}>
            <BsXLg/>
          </button>
      </div>
      
      {/* <div className={toggle? styles.none: styles.line}></div> */}
    </>
  )
}
export default Header;