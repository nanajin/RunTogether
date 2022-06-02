import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Pay.css";

function PayReady(props){
  // const total_amount = props.total_amount;
  const total_amount = 1000;
  const [state, setState]=useState({
    // 응답에서 가져올 값들
    // next_redirect_pc_url: "",
    next_redirect_mobile_url:"", //-> 웹뷰일때
    tid: "",
    // 요청에 넘겨줄 매개변수들
    params: {
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: "챌린지 기부",
      quantity: 1,
      total_amount: total_amount,  //금액
      tax_free_amount: 0,
      // approval_url: "https://localhost:3000/payapprove",
      approval_url: "http://192.168.0.170:3000/payapprove",
      fail_url: "https://localhost:3000/",
      cancel_url: "https://localhost:3000/",
    }
  })
const params = state.params;
useEffect(()=>{
  axios({
    url: "/v1/payment/ready",
    method: "POST",
    headers: {
      Authorization: "KakaoAK e2f3fbf571b72c6709190d4747309c55",
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    params,
  }).then((res)=>{
    const{
      data:{next_redirect_mobile_url, tid}
    } = res;
    
    // 응답 데이터로 갱신
    setState((prevState)=>({
      ...prevState,
      // next_redirect_pc_url: next_redirect_pc_url,
      next_redirect_mobile_url: next_redirect_mobile_url,
      tid: tid,
   }))
   // local에 tid 저장
   window.localStorage.setItem("tid", tid);
  });
},[state]);
  
  return(
    <div className="ready_container">
      <a href={state.next_redirect_mobile_url}>
        <img className="kakaopay_logo" src="/image/kakaopay.png" alt="없음"></img>
      </a>
    </div>
  )
}
export default PayReady;