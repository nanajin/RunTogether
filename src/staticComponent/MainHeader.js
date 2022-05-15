import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styles from './MainHeader.module.css';
import {BsList, BsXLg, BsFillPersonFill} from 'react-icons/bs';

function MainHeader(){
  const [toggle, setToggle] = useState(false); //미디어 버전

  return(
    <>
      <ul className= {toggle ?`${styles.header_user} ${styles.active}`: styles.header_user}>
            <li className={styles.nav_item}>
              <Link to = '/login'>Log In</Link>
            </li>
            <li className={styles.nav_item}>
              <Link to = '/signup'>Sign Up</Link>
            </li>  
      </ul>
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
                <Link to = '/'>Community</Link>
              </li>
              <li className={styles.nav_item}>
                <Link to = '/record'>Record</Link>
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