import React, { useState } from "react";
import './Tab.css';

function Tab(){
  const [active, setActive] = useState(0); //0번째 버튼
  const showContent ={
    0: "전체 랭킹", // import한 함수도 가능
    1: "기록 랭킹",
    2: "기부 랭킹"
  };
  
  return(
    <>
    <ul className="nav">
      <li className="nav-item">
        <button className={`${active === 0? 'nav-link-active':'nav-link'}`} onClick={()=>{setActive(0)}}>전체 랭킹</button>

      </li>
      <li className="nav-item">
        <button className={`${active === 1? 'nav-link-active':'nav-link'}`} onClick={()=>{setActive(1)}}>기록 랭킹</button>
      </li>
      <li className="nav-item">
        <button className={`${active === 2? 'nav-link-active':'nav-link'}`} onClick={()=>{setActive(2)}}>기부 랭킹</button>
      </li>
    </ul>
    <div className="rank-content">
      {showContent[active]}
    </div>
    </>
  )
}
export default Tab;