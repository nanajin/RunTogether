import React, { useState } from "react";
import axios from "axios";
function PayApprove(){
    const current_url = window.location.href; //현재주소 
    const url = new URL(current_url);
    const urlParams = url.searchParams;
    console.log(`"url: " ${urlParams}`);

    let pg_token = "";
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
    axios({
        url: "/v1/payment/approve",
        method:"POST",
        headers: {
            Authorization: "KakaoAK e2f3fbf571b72c6709190d4747309c55",
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        params,
    }).then((res)=>{
        if(res){
          alert("결제완료");
        }
    }).catch(e=>{
        console.log(e);
    })
    return(
        <>
        <h2>Result page</h2>
        </>
    )
}
export default PayApprove;