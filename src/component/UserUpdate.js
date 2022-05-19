import React, { useState } from 'react';
import './UserUpdate.css';
import { useRecoilState } from 'recoil';
import loginState from '../staticComponent/state';

function UserUpdate(){
  const [login, setLogin] = useRecoilState(loginState);
  const [nickname, setNickname] = useState="";
  const [id, setId] = useState="";
  const [pw, setPw] = useState="";
  const [check, setCheck] = useState="";
  const [name, setName] = useState="";

  return(
    <>
      <p>회원정보 수정 페이지 입니다</p>
      {login?
      <>
      <h1>회원정보 조회/수정</h1>
      <div className='updateSection'>
        <label>
            <h5><span>*</span> 닉네임</h5>
            <input type="text" placeholder="NickName" onChange={setNickname}></input>
        </label>
        <hr></hr>
        <h5><span>*</span> 아이디</h5>
        <label>
            <input type="id" placeholder="ID" onChange={setId}/>
        </label>
        <hr></hr>
        <h5><span>*</span> 비밀번호</h5>
        <label>
            <input type="password" placeholder="PassWord" onChange={setPw}/>
        </label>
        <hr></hr>
        <h5><span>*</span> 비밀번호 확인</h5>
        <label>
            <input type="password" placeholder="PassWord Check" onChange={setCheck}/>
        </label>
        <hr></hr>
        <h5><span>*</span> 이름</h5>
        <label>
            <input type="text" placeholder="Name" onChange={setName}/>
        </label>
      </div>
      {/* <h5>전화번호</h5>
      <input type="text" name="phone-number" placeholder='번호 입력'></input>
      <hr></hr>
      <h5>주소</h5>
      <input type="text" name="address" placeholder='주소 입력'></input>
      <hr></hr>
      <h5>이메일</h5>
      <input type="email" name="email" placeholder='이메일 입력'></input>
      <hr></hr> */}

      <input type="submit" value='수정하기'></input>  {/*누르면 alert 뜨기*/}
      <input type="submit" value='이전으로 돌아가기'></input>
      </>: 
      <p>로그인 후 이용하실 수 있습니다</p>}
    </>
  )
}
export default UserUpdate;