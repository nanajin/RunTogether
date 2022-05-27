import '../component/App.css';
import {BrowserRouter, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import MainPage from '../page/MainPage';
import SignUpPage from '../page/SignUpPage';
import Login from '../staticComponent/LoginPage';
import RecordPage from '../page/RecordPage';
import ChallengePage from '../page/ChallengePage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import About from './About';
import UserUpdate from './UserUpdate';
import Main from './Main';
import Challenge from './Challenge';
import ScrollToTop from './ScrollToTop';
import Register from '../component/Register';
import MyPage from '../page/MyPage';
import PayApprove from './kakao/PayApprove';
import PayReady from './kakao/PayReady';
import ChallengeWrite from './challenge/ChallengeWrite';
import ChallengeList from './challenge/ChallengeList';
import ChallengeView from './challenge/ChallengeView';
import ChallengeManagerPage from './challenge/ChallengeManagerPage';
import ChallengeUserPage from './challenge/ChallengeUserPage';
import ChallengeRegister from './challenge/ChallengeRegister';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import RunningMate from './RunningMate';
import MateView from './MateView';
import LoginWarning from './LoginWarning';
import ErrorPage from '../page/ErrorPage';
import ChallengeAdminWrite from './challenge/ChallengeAdminWrite';
import Loading from './Loading';
import Run from './record/Run';
import Chat from './chat/Chat';
import JoinRoom from './chat/JoinRoom';
import MyRecordView from './MyRecordView';

/* eslint no-restricted-globals: ["off"] */
function App() {
  return (
    <>
    <BrowserRouter>
      <ScrollToTop/>
          <TransitionGroup className="transition-group">
            <CSSTransition key={location.pathname} timeout={300} className="page">
      <Routes>
        <Route path='/' exact element={<Main/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/userupdate' element={<UserUpdate/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/payapprove' element={<PayApprove/>}/>
        <Route path='/challengewrite' element={<ChallengeWrite/>}/>
        <Route path='/challengelist/:id' element={<ChallengeList/>}/>
        <Route path='/challengeview/:id' element={<ChallengeView/>}/>
        <Route path='/challengemanagerpage' element={<ChallengeManagerPage/>}/>
        <Route path='/challengeuserpage' element={<ChallengeUserPage/>}/>
        <Route path='/challengeregister/:id' element={<ChallengeRegister/>}/>
        <Route path='/mate' element={<RunningMate/>}/>
        <Route path='/mateview' element={<MateView/>}/>
        <Route path='/loginwarning' element={<LoginWarning/>}/>
        <Route path='/errorpage' element={<ErrorPage/>}/>
        <Route path='/record' element={<RecordPage/>}/>
          {/* :<Route path='/record' element={<Navigate replace to = "/login"/>}/> */}
        <Route path='/challenge' element={<Challenge/>}/>
        <Route path='/challengeadminwrite' element={<ChallengeAdminWrite/>}/>
        <Route path='/loading' element={<Loading/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/joinroom' element={<JoinRoom/>}/>
        <Route path='/myrecordview' element={<MyRecordView/>}/>

      </Routes>  
      </CSSTransition>
      </TransitionGroup>      
    </BrowserRouter>
    
    </>
  );
}

export default App;
