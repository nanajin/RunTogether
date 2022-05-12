import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../staticComponent/Footer";
import Header from "../../staticComponent/Header";
import ChargeMoney from "../kakao/ChargeMoney";
import "./ChallengeView.css";

function ChallengeView(){
  const location = useLocation();
  const navigate = useNavigate();
  
  const params = location.state.id;
  const grade = location.state.grade;

  const [view, setView] = useState({
    title: location.state.title,
    contents: location.state.contents,
    filename: location.state.filename,
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
        url: `/reactBackend/${grade}count`,
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

  const [isModalOn, setIsModalOn] = useState(false);
  const HandleModal = (active)=>{
    setIsModalOn(active);
  }
  return(
    <>
      <Header/>
      <div className="challengeview">
        <div className="view_title">{view.title}</div>
        {view.filename && 
          <div className="view_img">
            <img src={require(`../../../backend/uploadImg/${view.filename}`)}></img>
          </div>}
        <div className="view_contents">{view.contents}</div>
      </div>
      <div>
          <button className="challenge_join" onClick={()=>{HandleModal(true)}}>참여하기</button>
          {isModalOn && <ChargeMoney setIsModalOn={HandleModal}/>}
      </div>
      <div className="manager_admin">
      <button className="challenge_rewrite">
        <Link to = {url} className="link"
          state = {{title: view.title, contents: view.contents, filename: view.filename,}}>
                   수정하기 
        </Link> 
        </button>
        <button onClick={onRemove} className="challenge_remove">삭제하기</button>
      </div>
      <Footer/>
    </>
  )
}
export default ChallengeView;