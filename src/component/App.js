import '../component/App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import MainPage from '../page/MainPage';
import SignUpPage from '../page/SignUpPage';
import Login from './Login';
import RecordPage from '../page/RecordPage';
import ChallengePage from '../page/ChallengePage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LoginModal from './LoginModal';

function App(props) {
  const [login, setLogin] = useState(false);

  // const isLogin=(login)=>{
  //   setLogin(login);
  // }
  // console.log(login);
  // const [isLogin, setIsLogin] = useState(false);
  // useEffect(()=>{

  // },[]);
  // const loginCallBack = (login)=>{
  //   setIsLogin(login);
  // }
  // if(isLogin){
  //   console.log("login true");
  // }
  // else{
  //   console.log("login false");
  // }
  // console.log(props.isLogin);
  return (
    <>
    {/* <IsLogin setLogin={setLogin}/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<MainPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<Login/>}/>
        
        {login?
          <Route path='/record' element={<RecordPage/>}/>
          :<Route path='/record' element={<Navigate replace to = "/login"/>}/>
        }
        {login?
          <Route path='/challenge' element={<ChallengePage/>}/>
          :<Route path='/challenge' element={<Navigate replace to = "/login"/>}/>
        }
      </Routes>  
    </BrowserRouter>
    
    </>
  );
}

export default App;
