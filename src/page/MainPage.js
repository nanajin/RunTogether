import React from "react";
import Main from '../component/Main';
import Header from "../staticComponent/Header";
import Footer from "../staticComponent/Footer";

function MainPage(){
  return(
    <div>
      <Header/>
      <Main/>
      {/* <Footer/> */}
    </div>
  );
}
export default MainPage;