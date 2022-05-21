import React from "react";
import Header from "../staticComponent/Header";
import Footer from "../staticComponent/Footer";
import Register from '../component/Register';

function SignUpPage(){
  return(
    <div>
      <Header/>
      <Register/>
      <Footer/>
    </div>
  );
}
export default SignUpPage;