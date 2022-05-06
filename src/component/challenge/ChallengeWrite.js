import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../staticComponent/Footer";
import Header from "../../staticComponent/Header";
import "./ChallengeWrite.css";

function ChallengeWrite(){
  const navigate = useNavigate();
  const [data, setData] = useState(
    {
      title: '',
      contents: '',
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
  const onSubmit =()=>{
    // axios({                    //DB에 올림(json으로..?)
    //   url: "/api/board",
    //   method: "POST",
    //   data: data,
    // })
    axios({
      url: "/reactBackend/write",
      method: 'POST',
      data: {
        title: data.title,
        contents: data.contents,
      }
    }).then((res)=>{
      alert("글 게시 성공!");
      console.log(res.data);
    }).catch(e=>{
        console.log(e);
      })
    console.log(data);
    navigate("/challenge")
  };
  const onReset = ()=>{
    // e.preventDefault();
    setData({
      ...data,
      title: "",
      contents: "",
    })
  };
  const onCancel = ()=>{
    navigate("/challenge")
  };
  return(
    <>
      <Header/>
      <div className="board_container">
        <br></br>
        <h1>챌린지 제안 게시판</h1>
        <form>
          <input className="board_title" type="text" placeholder="제목" name="title" value={title} onChange={onChange}></input>
          <br></br>
          <textarea className="board_contents" placeholder="내용을 입력하세요." name="contents" value={contents} onChange={onChange}></textarea>
          {/* <input type="file" required accept="image/jpg, image/jpeg, image/png" ></input> */}
        </form>
        <div className="post_btn">
          <button className="post_submit_btn" onClick={onSubmit}>글 게시</button>
          <button className="post_reset_btn" onClick={onReset}>초기화</button>
          <button className="post_cancel_btn" onClick={onCancel}>작성 취소</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default ChallengeWrite;