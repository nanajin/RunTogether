import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorPage from "../../page/ErrorPage";
import Footer from "../../staticComponent/Footer";
import Header from "../../staticComponent/Header";
import "./ChallengeWrite.css";
import { useRecoilState } from "recoil";
import {loginState} from "../../staticComponent/state";
import LoginWarning from "../LoginWarning";

function ChallengeWrite(){
  const [login, setLogin] = useRecoilState(loginState);
  const navigate = useNavigate();
  const [data, setData] = useState(
    {
      title: '',
      contents: '',
    }
  );  
  const {title, contents} = data;

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

  const onSubmit =()=>{
    const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
    const formData = new FormData();
    formData.append('file', imgUrl);
    formData.append('boardDto', blob);

      // 글 업로드
    axios({
      url: "/board/write",
      method: 'POST',
      data: formData,
    }).then((res)=>{
      alert("글 게시 성공!");
      navigate("/challenge");
    }).catch(e=>{
      <ErrorPage/>
    })
  };
  
  const onReset = ()=>{
    setData({
      ...data,
      title: "",
      contents: "",
    })
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
      {login?
      <div className="board_container">
        <br></br>
        <h1>챌린지 제안 작성</h1>
        <form >
          <input className="board_title" type="text" placeholder="제목" name="title" value={title} onChange={onChange}></input>
          <br></br>
          <textarea className="board_contents" placeholder="내용을 입력하세요." name="contents" value={contents} onChange={onChange}></textarea>
          <input type="file" name="file" className="board_file" onChange={handleImage}></input>
        </form>
        
        <div className="post_btn">
          <button className="post_submit_btn" onClick={onSubmit}>글 게시</button>
          <button className="post_reset_btn" onClick={onReset}>초기화</button>
          <button className="post_cancel_btn" onClick={onCancel}>작성 취소</button>
        </div>
      </div>:
      <LoginWarning/>}
      <Footer/>
    </>
  )
}
export default ChallengeWrite;