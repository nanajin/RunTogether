import React from "react";
import Headers from "./Header"
import Footer from "./Footer";
import Login from "../component/login/Login.js";
function LoginPage(){
  return(
    <>
      <Headers/>
      <Login/>
      <Footer/>
    </>
  );
}
export default LoginPage;