import React from "react";
import SignUp from '../component/SignUp';
import Header from "../staticComponent/Header";
import Footer from "../staticComponent/Footer";

function SignUpPage(){
  return(
    <div>
      <Header/>
      <SignUp/>
      <Footer/>
    </div>
  );
}
export default SignUpPage;