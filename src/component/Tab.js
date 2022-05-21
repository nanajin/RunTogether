import React, { useState } from "react";
import styles from './Tab.module.css';

function Tab(){
  const [active, setActive] = useState(0); //0번째 버튼
  const showContent ={
    0: "전체 랭킹", // import한 함수도 가능
    1: "기록 랭킹",
    2: "기부 랭킹"
  };
  
  return(
    <>
    <ul className={styles.nav}>
      <li className={styles.nav_item}>
        <button className={`${active === 0? styles.nav_link_active:styles.nav_link}`} onClick={()=>{setActive(0)}}>전체 랭킹</button>

      </li>
      <li className={styles.nav_item}>
        <button className={`${active === 1? styles.nav_link_active:styles.nav_link}`} onClick={()=>{setActive(1)}}>기록 랭킹</button>
      </li>
      <li className={styles.nav_item}>
        <button className={`${active === 2? styles.nav_link_active:styles.nav_link}`} onClick={()=>{setActive(2)}}>기부 랭킹</button>
      </li>
    </ul>
    <div className={styles.rank_content}>
      {showContent[active]}
    </div>
    </>
  )
}
export default Tab;