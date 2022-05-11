import axios from "axios";
import React, { useEffect, useState } from "react";
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
  
  //파일 이름 DB에 저장하기
  let filename = '';
  //이미지 파일 업로드
  const [file, setFile] = useState("");
  const onUploadFile=(e)=>{
    let img = e.target.files[0];
    console.log(img);
    setFile(img);
    console.log( `setFile: ${file}`);
  }

  const onSubmit =()=>{
    const formData = new FormData();
    formData.append('file', file);
    // 이미지 업로드
    axios.post("/reactBackend/image", formData,{
      headers:{
        'content-type': 'multipart/form-data',
      }
    }).then(res=>{
      filename = res.data.fileName;
      console.log(filename);
      // 글 업로드
    axios({
      url: "/reactBackend/write",
      method: 'POST',
      data: {
        title: data.title,
        contents: data.contents,
        filename: filename,
      }
    }).then((res)=>{
      alert("글 게시 성공!");
      console.log(res.data);
    }).catch(e=>{
        console.log(e);
      })
    console.log(data);
    navigate("/challenge");

    })
  };
  
  const onReset = ()=>{
    // e.preventDefault();
    setData({
      ...data,
      title: "",
      contents: "",
    })
    setFile('');
  };
  const onCancel = ()=>{
    let result = window.confirm('작성을 취소하시겠습니까?');
    if(result){
      navigate("/challenge");
    }
    else{

    }
  };


  return(
    <>
      <Header/>
      <div className="board_container">
        <br></br>
        <h1>챌린지 제안 작성</h1>
        <form>
          <input className="board_title" type="text" placeholder="제목" name="title" value={title} onChange={onChange}></input>
          <br></br>
          <textarea className="board_contents" placeholder="내용을 입력하세요." name="contents" value={contents} onChange={onChange}></textarea>
          <input type="file" name="file" onChange={onUploadFile} ></input>
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