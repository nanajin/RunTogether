import React, { useState } from "react";
import axios from "axios";
import PayApprove from "./PayApprove";

function PayReady(){
  const [state, setState]=useState({
    // 응답에서 가져올 값들
    next_redirect_pc_url: "",
    // next_redirect_mobile_url:"", -> 웹뷰일때
    tid: "",
    // 요청에 넘겨줄 매개변수들
    params: {
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: "챌린지 기부",
      quantity: 1,
      total_amount: 2200,  //금액
      // vat_amount: 200,
      tax_free_amount: 0,
      approval_url: "http://localhost:3000/payapprove",
      fail_url: "http://localhost:3000/payapprove",
      cancel_url: "http://localhost:3000/payapprove",
    }
  })
const params = state.params;
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
      data:{next_redirect_pc_url, tid}
    } = res;
    console.log(`"next_redirect: "${next_redirect_pc_url}`);
    console.log(`"tid: "${tid}`);
    // 응답 데이터로 갱신
    setState((prevState)=>({
      ...prevState,
      next_redirect_pc_url: next_redirect_pc_url,
      tid: tid,
   }))
   // local에 tid 저장
   window.localStorage.setItem("tid", tid);
  });

  return(
    <>
      <p>kakao pay</p>
      <a href={state.next_redirect_pc_url}>link</a>
    </>
  )
}
export default PayReady;