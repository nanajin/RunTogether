import React from "react";
import Footer from "../staticComponent/Footer";
import Record from "../component/Record";
import Header from "../staticComponent/Header"
import Run from "../component/record/Run";
function RecordPage(){

  return(
    <>
      <Header/>
      <Run/>
      {/* <Record/> */}
      <Footer/>
    </>
  )
}

export default RecordPage;