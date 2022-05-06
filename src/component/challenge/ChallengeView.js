import axios from "axios";
import React, { useState } from "react";
import Footer from "../../staticComponent/Footer";
import Header from "../../staticComponent/Header";
import "./ChallengeView.css";

function ChallengeView(){
  let params = window.location.href.slice(-1);
  const [view, setView] = useState({
    title: '',
    contents: '',
  });
  axios({
    method: "GET",
    url: "/reactBackend/list",
  }).then((res)=>{

    setView({
      ...view,
      title: res.data[params-1].title,
      contents: res.data[params-1].contents,
    });
  })
  return(
    <>
      <Header/>
      <div className="challengeview">
        <div className="view_title">{view.title}</div>
        <div className="view_contents">{view.contents}</div>
      </div>
      <Footer/>
    </>
  )
}
export default ChallengeView;