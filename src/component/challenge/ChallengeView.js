import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../staticComponent/Footer";
import Header from "../../staticComponent/Header";
import ChargeMoney from "../kakao/ChargeMoney";
import "./ChallengeView.css";
import { useRecoilState } from "recoil";
import {loginState, userState} from "../../staticComponent/state";
import LoginWarning from "../LoginWarning";
import ErrorPage from "../../page/ErrorPage";

function ChallengeView(){
  const [login, setLogin] = useRecoilState(loginState);
  const [user, setUser] = useRecoilState(userState);
  const location = useLocation();
  const navigate = useNavigate();
  
  const id = location.state.id;
  const api = location.state.api;

  const [view, setView] = useState({
    title: '',
    contents: '',
    filename: '',
  });
  
  useEffect(()=>{
      axios({
        method: "GET",
        url: `/${api}/${id}`,
      }).then(res=>{
        setView({
          ...view,
          title: res.data.data.title,
          contents: res.data.data.contents,
          filename: res.data.data.imageFileName,
        });
        console.log(res.data.data.imageFileName)
      }).catch(e=>{
        <ErrorPage/>
      })
  },[]);

  // useEffect(()=>{
  //   axios.get('/board/image', 
  //         {params: {
  //           name: view.filename,
  //       }}).then(res=>{
  //         console.log(res.data);
  //       })
  // },[view.filename]);
  // const viewImage = ()=>{
  //     axios.get('/board/image', 
  //         {params: {
  //           name: view.filename,
  //       }}).then(res=>{
  //         console.log(res.data);
  //       })
  // }
  const onApprove=()=>{
    axios({
      method: 'POST',
      url: `/board/admin/approve/${id}`,
      params: {state: '진행중'}
    }).then(res=>{
      alert(res.data.message);
      navigate('/challenge');
    })
  }
  let url = `/challengeregister/${id}`;

  // const onRemove=()=>{
  //   axios({
  //     url:"/reactBackend/remove",
  //     method:"POST",
  //     data: {
  //       id: params,
  //     }
  //   }).then(res=>{
  //     alert("삭제되었습니다.");
  //     navigate("/challengemanagerpage");
  //   })
  // }

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
            {/* <img src={`http://localhost:8080/${view.filename}`}></img> */}
          </div>}
        <div className="view_contents">{view.contents}</div>
      </div>
      {login?
      <>
        <div>
            <button className="challenge_join" onClick={()=>{HandleModal(true)}}>참여하기</button>
            {isModalOn && <ChargeMoney setIsModalOn={HandleModal}/>}
        </div>
        <div className="manager_admin">
          {user === '관리자' &&
          <button className="challenge_rewrite" onClick={onApprove}>
            챌린지 승인
          </button>}
          {/* <button onClick={onRemove} className="challenge_remove">삭제하기</button> */}
        </div> 
      </> : 
      <LoginWarning/>}
      <Footer/>
    </>
  )
}
export default ChallengeView;