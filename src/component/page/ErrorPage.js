import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './ErrorPage.css';
function ErrorPage(){
  return(
    <div className="errorpage">
      <h2>!오류가 발생했습니다!</h2>
      <h2>!다시 시도해주세요!</h2>
      <Link to ='/'>홈으로 가기</Link>
    </div>
  )
}
export default ErrorPage; 