import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Footer from "../../staticComponent/Footer";
import Header from "../../staticComponent/Header";
import "./ChallengeWrite.css";

function ChallengeRegister(){
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const [data, setData] = useState(
    {
      title: location.state.title,
      contents: location.state.contents,
    }
  );
  const {title, contents} = data;

  const onChange = (e)=>{
    // e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  };
  
  const onManagerSubmit =()=>{
    axios({
      url: "/reactBackend/managerwrite",
      method: 'POST',
      data: {
        title: data.title,
        contents: data.contents,
      }
    }).then((res)=>{
      alert("챌린지 정식 등록 성공!");
      console.log(res.data);
    }).catch(e=>{
        console.log(e);
      })
    console.log(data);
    navigate("/challenge")
  };

  
  const onCancel = ()=>{
    navigate("/challenge")
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
          {/* <input type="file" required accept="image/jpg, image/jpeg, image/png" ></input> */}
        </form>
        <div className="post_btn">
          <button className="post_submit_btn" onClick={onManagerSubmit}>챌린지 등록</button>
          <button className="post_cancel_btn" onClick={onCancel}>작성 취소</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default ChallengeRegister;