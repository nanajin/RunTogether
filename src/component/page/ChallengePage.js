import React from "react";
import Header from "../staticComponent/Header";
import Footer from "../staticComponent/Footer";
import Challenge from "../component/Challenge";

function ChallengePage(){
  return(
    <div>
      <Header/>
      <Challenge/>
      <Footer/>
    </div>
  );
}
export default ChallengePage;