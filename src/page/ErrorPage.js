import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
function ErrorPage(){
  const navigateState = useNavigate().state;
  const location = useLocation();
  console.log(`에러페이지: ${location.state.error}`);
  return(
    <div className="errorpage">
      <div>{location.state.error}</div>
    </div>
  )
}
export default ErrorPage; 