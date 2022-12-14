import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ErrorPage from "../../page/ErrorPage";
import Footer from "../../staticComponent/Footer";
import Header from "../../staticComponent/Header";
import "./ChallengeWrite.css";

function ChallengeRegister(){
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState(
    {
      title: location.state.title,
      contents: location.state.contents,
    }
  );
  const {title, contents} = data;

  const filename = location.state.filename;
  const onChange = (e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  };

  const [imgUrl, setImageUrl] = useState(null);
  const handleImage = (e)=>{
    e.preventDefault();
    const file = e.target.files[0];
    setImageUrl(file);
  }

  const onRegisterSubmit =()=>{
    const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
    const formData = new FormData();
    formData.append('file', imgUrl);
    formData.append('challengeDto', blob);

    //글 업로드
    axios({
      url: "/challenge/admin/write",
      method: 'POST',
      data: formData,
    }).then((res)=>{
      alert("챌린지 정식 등록 성공!");
      console.log(res.data);
    }).catch(e=>{
      <ErrorPage/>
    })
    navigate("/challenge");
  };

  
  const onCancel = ()=>{
    let result = window.confirm('작성을 취소하시겠습니까?');
    if(result){
      navigate("/challenge");
    }
  };
  return(
    <>
      <Header/>
      <div className="board_container">
        <br></br>
        <h1>챌린지 등록 작성</h1>
        <form>
          <input className="board_title" placeholder={data.title} type="text" name="title" value={title} onChange={onChange}></input>
          <br></br>
          <textarea className="board_contents" placeholder={data.contents} name="contents" value={contents} onChange={onChange}></textarea>
          <input type="file" name="file" className="board_file" onChange={handleImage}></input>
        </form>
        {filename && 
          <div className="view_img">
            <img src={`http://localhost:8080/${filename}`}></img>
          </div>}
        <div className="post_btn">
          <button className="post_submit_btn" onClick={onRegisterSubmit}>챌린지 등록</button>
          <button className="post_cancel_btn" onClick={onCancel}>작성 취소</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default ChallengeRegister;