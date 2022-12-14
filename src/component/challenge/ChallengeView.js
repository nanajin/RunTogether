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
  
  // useEffect(()=>{
  //     axios({
  //       method: "GET",
  //       url: `/${api}/${id}`,
  //     }).then(res=>{
  //       setView({
  //         ...view,
  //         title: res.data.data.title,
  //         contents: res.data.data.contents,
  //         filename: res.data.data.imageFileName,
  //       });
  //     }).catch(e=>{
  //       <ErrorPage/>
  //     })
  // },[]);

  const onApprove=()=>{
    axios({
      method: 'POST',
      url: `/board/admin/approve/${id}`,
      params: {state: '진행중'}
    }).then(res=>{
      alert(res.data.message);
      navigate('/challenge');
    }).catch(e=>{
      alert('문제가 발생했습니다. 다시 시도해주세요')
    })
  }
  let url = `/challengeregister/${id}`;

  const onRemove=()=>{
    axios({
      url: `/${api}/admin/delete/${id}`,
      method:"DELETE",
    }).then(res=>{
      alert("삭제되었습니다.");
      navigate("/challenge");
    }).catch(e=>{
      alert('문제가 발생했습니다. 다시 시도해주세요')
    })
  }

  const [img, setImg] = useState('');
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
    }).catch(e=>{
      <ErrorPage/>
    })
    axios({
      url: `/${api}/image/${id}`,
      method: 'GET',
      responseType: 'blob',
    }).then(res=>{
      console.log(res);
      const myFile = new File([res.data], 'imgName');
      const reader = new FileReader();
      reader.onload= ev=>{
        const previewImg = String(ev.target?.result)
        setImg(previewImg);
      }
      reader.readAsDataURL(myFile);
    })
  },[]);
  const [isModalOn, setIsModalOn] = useState(false);
  const HandleModal = (active)=>{
    setIsModalOn(active);
  }
  const handleJoin = ()=>{
    if(window.confirm('해당 챌린지에 참여하시겠습니까?')){
      navigate('/record',{state: id});
    }
    
  }

  return(
    <>
      <Header/>
      <div className="challengeview">
        <div className="view_title">{view.title}</div>
        {view.filename && 
          <div className="view_img">
            <img src={`${img}`} alt="챌린지 이미지"></img>
          </div>}
        <div className="view_contents">{view.contents}</div>
      </div>
      {login?
      <>
        {api === 'challenge'&&
        <div>
          <button className="challenge_join" onClick={handleJoin}>참여하기</button>
            {/* <button className="challenge_join" onClick={()=>{HandleModal(true)}}>참여하기</button>
            {isModalOn && <ChargeMoney setIsModalOn={HandleModal}/>} */}
        </div>}
        <div className="manager_admin">
          {user === '관리자' &&
          <>
            {api === 'board'&&
            <button className="challenge_rewrite" onClick={onApprove}>
              챌린지 승인
            </button>}
            <button onClick={onRemove} className="challenge_remove">삭제하기</button>
          </>}
        </div> 
      </> : 
      <LoginWarning/>}
      <Footer/>
    </>
  )
}
export default ChallengeView;