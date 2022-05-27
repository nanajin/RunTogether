import { useState,useRef, useEffect } from "react";
import styles from "../LoginModal.module.css"
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import { BsXLg } from 'react-icons/bs';
import PayReady from "./PayReady";
import { useRecoilState } from "recoil";
import { userState } from "../../staticComponent/state";

//모달 페이지
function ChargeMoney(props){
  const [user, setUser] = useRecoilState(userState);
  console.log(props.distance);
  const distance = props.distance*1000;
  const [money, setMoney] = useState(distance);  //1km에 1000원씩
  const navigate = useNavigate();
  const [pay, setPay] = useState(false);
  const modalOff=()=>{
    props.setIsModalOn(false);
  };

  // const handleInputMoney =(e)=>{
  //   setMoney(e.target.value);
  // }
  
  return(
    <>
    <div className={styles.chargemoney}>
      <h3>Challenge for Run Together!</h3>
      <p className={styles.title}>{user}님</p>
      {/* <p className={styles.title}>기부할 금액</p> */}
      <p className={styles.title}>기부할 금액: {money}원</p>
        {/* <label className={styles.input}>
          <input type="text" placeholder="0" onChange={handleInputMoney}/>
        </label> */}
        <br></br>
        <button className={styles.pay_btn} onClick={()=>setPay(true)}> 
          카카오페이로 결제하기
        </button>
        {pay? <PayReady total_amount={money}/> : null}

        <button onClick={modalOff} className={styles.x}>
          <BsXLg/>
        </button>
        <br></br>  
    </div>
    </>
  );
}
export default ChargeMoney;