import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../staticComponent/Footer";
import Header from "../../staticComponent/Header";
import "./ChallengeView.css";
import ChallengeWrite from "./ChallengeWrite";

function ChallengeView(){
  const location = useLocation();
  const navigate = useNavigate();
  
  const params = location.state.id;
  const [view, setView] = useState({
    title: location.state.title,
    contents: location.state.contents,
  });
  
  // const p = manager? "manager": "";
  // // if(manager){
  //   console.log(p);
  //   axios({
  //     method: "GET",
  //     url: `/reactBackend/${p}list`,
  //   }).then((res)=>{
  //     const length = res.data.length;
  //     const id = res.data.map(el=>{
  //       if(el.id === params){
  //         console.log(el.title);
  //       }
  //     })
  //     console.log(res.data.id);
  //     // console.log(Object.values(arr));
  //     // setView({
  //     //   ...view,
  //     //   title: res.data[length-params].title,
  //     //   contents: res.data[length-params].contents,
  //     // });
  //   });
  // }
  // else{
  //   axios({
  //     method: "GET",
  //     url: "/reactBackend/list",
  //   }).then((res)=>{
  //     const length = res.data.length;
  //     setView({
  //       ...view,
  //       title: res.data[length-params].title,
  //       contents: res.data[length-params].contents,
  //     });
  //   });
  // }

  useEffect(()=>{
      axios({
        method: "POST",
        url: "/reactBackend/count",
        data: {
          id: params,
        }
      }).then(res=>{
        console.log(res);
      })
  },[params]);

  let url = `/challengeregister/${params}`;
  const onRemove=()=>{
    axios({
      url:"/reactBackend/remove",
      method:"POST",
      data: {
        id: params,
      }
    }).then(res=>{
      alert("삭제되었습니다.");
      navigate("/challengemanagerpage");
    })
  }
  return(
    <>
      <Header/>
      <div className="challengeview">
        <div className="view_title">{view.title}</div>
        <div className="view_contents">{view.contents}</div>
      </div>
      <Link to = {url}
        state = {{title: view.title, contents: view.contents}}>수정하기</Link>
      <button onClick={onRemove}>삭제하기</button>
      <Footer/>
    </>
  )
}
export default ChallengeView;