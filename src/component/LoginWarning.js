import React from "react";
import { Link } from "react-router-dom";
import './LoginWarning.css';
function LoginWarning(){
    return(
        <>
        <div className="loginwarning">
            <h2>!방문객님, 로그인 먼저 해주세요!</h2>
            <Link to ="/login">로그인하러 가기</Link>
            <h4>아직 회원이 아니신가요?</h4>
            <Link to ="/signup">회원가입하러 가기</Link>
        </div>
        </>
    )
}
export default LoginWarning;