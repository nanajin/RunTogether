import React, { useEffect, useState } from "react";
import styles from './RunningMate.module.css';
import {BsFillChatDotsFill, BsSearch, BsFillPersonFill} from 'react-icons/bs';
import Header from "../staticComponent/Header";
import Footer from "../staticComponent/Footer";
import { Link, parsePath } from "react-router-dom";
import LoginWarning from "./LoginWarning";
import axios from "axios";
import Loading from "./Loading";
import { useRecoilState } from "recoil";
import {loginState, userState} from "../staticComponent/state";
function RunningMate(){
  const [login, setLogin] = useRecoilState(loginState);
  const [user, setUser] = useRecoilState(userState);
  const [state, setState] =useState({
    memeberList: [],
  })
  const [search, setSearch] = useState('');
  const [filterList, setFilterList] = useState([]);

  const onChange=(e)=>{
    e.preventDefault();
    setSearch(e.target.value);
  }
  //모든 회원 조회
  useEffect(()=>{
    axios.get('/api/member').then(res=>{
      setState({
        ...state,
        memeberList: res.data.data,
      })
    })
  },[]);
  //서치 기능
  const onSearch=(e)=>{
    e.preventDefault();
    if(search === null || search === ''){
      axios.get('/api/member').then(res=>{
        setState({
          ...state,
          memeberList: res.data.data,
        })
      })
    }
    else{
      let filterData = state.memeberList.filter((data)=>{
        return data.name.toLowerCase() === search});
      console.log(`필터데이터: ${filterData}`);
      setFilterList(filterData);
      setState({
        ...state,
        memeberList: filterData,
      })
    }
  }
  return(
    <>
      <Header/>
      {login && 
      <div className={styles.mate}>
        <h3>Running Mate</h3>
        <form onSubmit={e=> onSearch(e)}>
          <input type="text" value={search} placeholder='Search' onChange={onChange} className={styles.search_input}></input>
          <button type="submit" className={styles.search_btn}><BsSearch/></button>
        </form>
        <div className={styles.friend}>
            {/* {filterList.length > 0 ? filterList.map((el,key)=>{
              if((user === el.name) || (el.name === '관리자')){
                return null;
              }
              else{
                return(
                <div className={styles.friend_box}>
                  <img src="image/profile.png" alt="프로필"></img>
                  <p style={{color: 'black'}}>이름: {el.name}</p>
                  <Link to ='/mateview' state={{memberName: el.name}}>
                    <p>기록 더보기</p>
                  </Link>
                  <Link to={`/chat`} state={{room: el.name}}>
                    <button className={styles.chat_btn}>
                      <BsFillChatDotsFill/>
                    </button>
                  </Link>
                </div>
              )}
            }) :
            state.memeberList.map((el,key)=>{
              if((user === el.name) || (el.name === '관리자')){
                return null;
              }
              else{
                return(
                <div className={styles.friend_box}>
                  <img src="image/profile.png" alt="프로필"></img>
                  <p style={{color: 'black'}}>이름: {el.name}</p>
                  <Link to ='/mateview' state={{memberName: el.name}}>
                    <p>기록 더보기</p>
                  </Link>
                  <Link to={`/chat`} state={{room: el.name}}>
                    <button className={styles.chat_btn}>
                      <BsFillChatDotsFill/>
                    </button>
                  </Link>
                </div>
              )}
            })
            } */}
              {state.memeberList.map((el,key)=>{
                if((user === el.name) || (el.name === '관리자')){
                  return null;
                }
                else{
                  return(
                  <div className={styles.friend_box}>
                    <img src="image/profile.png" alt="프로필"></img>
                    <p style={{color: 'black'}}>이름: {el.name}</p>
                    <Link to ='/mateview' state={{memberName: el.name}}>
                      <p>기록 더보기</p>
                    </Link>
                    <Link to={`/chat`} state={{name: el.name}}>
                      <button className={styles.chat_btn}>
                        <BsFillChatDotsFill/>
                      </button>
                    </Link>
                  </div>
                )}
              })}
        </div>
      </div>}
      {/* {loading && <Loading/>} */}
      {!login && <LoginWarning/>}
      <Footer/>
    </>
  )
}

export default RunningMate;