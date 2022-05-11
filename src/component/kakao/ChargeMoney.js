import { useState,useRef, useEffect } from "react";
import styles from "../LoginModal.module.css"
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import { BsXLg } from 'react-icons/bs';
import PayReady from "./PayReady";

//모달 페이지
function ChargeMoney(props){

  const [money, setMoney] = useState(0);
  const navigate = useNavigate();

  const modalOff=()=>{
    props.setIsModalOn(false);
  };

  const handleInputMoney =(e)=>{
    setMoney(e.target.value);
  }

  return(
    <>
    <div className={styles.login}>
      <h3>Challenge for Run Together!</h3>
      <p className={styles.title}>id: mijin</p>
      <p className={styles.title}>기부할 금액</p>

        <label className={styles.id}>
          <input type="text" placeholder="0" onChange={handleInputMoney}/>
        </label>

        <h3>카카오페이로 결제하기</h3>
        <PayReady total_amount={money}/>
        <button onClick={modalOff} className={styles.x}>
          <BsXLg/>
        </button>
        <br></br>  
    </div>
    </>
  );
}
export default ChargeMoney;