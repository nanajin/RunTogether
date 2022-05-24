import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import './Pay.css';

function PayApprove(){
    const [isOpen, setIsOpen] = useState(false);
    const current_url = window.location.href; //현재주소 
    const url = new URL(current_url);
    const urlParams = url.searchParams;
    console.log(`"url: " ${urlParams}`);

    let pg_token = "";
    
    // setTimeout(getToken,10000);
    if(urlParams.has('pg_token')){
      pg_token = urlParams.get('pg_token');
      
      console.log(`"토큰: " ${pg_token}`);
   }
   else{
       console.log("토큰이 없습니다.");
   }

    const [state, setState]=useState({
        params:{
            cid: "TC0ONETIME",
            tid: window.localStorage.getItem("tid"),
            partner_order_id: "partner_order_id",
            partner_user_id: "partner_user_id",
            pg_token: pg_token,
        }
    });
    
    const params = state.params;
    
    useEffect(async ()=>{
      await axios({
        url: "/v1/payment/approve",
        method:"POST",
        headers: {
          Authorization: "KakaoAK e2f3fbf571b72c6709190d4747309c55",
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        params,
      }).then((res)=>{
          if(res.status === 200){
            console.log("정상");
            setIsOpen(true);
          }
      }).catch(e=>{
          console.log(e);
      });
    },[]);
    
    
    return(
      <>
      {!isOpen && 
        <div className="approve_error">
          <h3>다시 결제해주시길 바랍니다.</h3>
          <Link to="/challenge">
            <button className="back_btn">돌아가기</button>
          </Link>
        </div>
      }
      {isOpen && 
        <div className="approve_container">
          <h3>기부에 참여해주셔서 감사합니다. </h3>
          <h3>챌린지도 화이팅해주세요! </h3>
          <div className="approve_btn">
          <Link to="/">
            <button className="back_btn">메인으로 가기</button>
          </Link>
          <br></br>
          <Link to="/challenge">
            <button className="back_btn">다른 챌린지도 구경하고 싶다면?</button>
          </Link>
          </div>
        </div>
      }
      </>
    )
}
export default PayApprove;