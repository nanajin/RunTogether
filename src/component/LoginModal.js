import { useState } from "react";
import "../component/LoginModal.css";
import {Link} from 'react-router-dom';

//로그인 모달 페이지
function LoginModal(props){
  const onSubmitBtn=()=>{
    props.setIsModalOn(false);
  };
  // const BodyBlackoutStyle=(props)=>{
    
  // }
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return(
    <div className="login">
      <h3>Welcome to Run Together!</h3>
      <p className="title">Login</p>
        <label className="id">
          <input type="text" placeholder="ID" onChange={setId}/>
        </label>
        <br></br>
        <label className="pw">
          <input type="password" placeholder="PASSWORD" onChange={setPw}/>
        </label>
        <button onClick={onSubmitBtn}>Login</button>
        {/* <input type="submit" value="Login"/> */}
        <br></br>
        {/* <Link to="https://www.naver.com/">
          <button>네이버로 로그인</button>
        </Link> */}
    </div>
  )
}
export default LoginModal;