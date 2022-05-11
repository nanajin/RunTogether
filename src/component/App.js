import '../component/App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import MainPage from '../page/MainPage';
import SignUpPage from '../page/SignUpPage';
import Login from '../staticComponent/LoginPage';
import RecordPage from '../page/RecordPage';
import ChallengePage from '../page/ChallengePage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LoginModal from './LoginModal';
import About from './About';
import UserUpdate from './UserUpdate';
import Main from './Main';
import Challenge from './Challenge';
import ScrollToTop from './ScrollToTop';
import Register from '../component/Register.tsx';
import MyPage from '../page/MyPage';
import PayApprove from './kakao/PayApprove';
import PayReady from './kakao/PayReady';
import ChallengeWrite from './challenge/ChallengeWrite';
import ChallengeList from './challenge/ChallengeList';
import ChallengeView from './challenge/ChallengeView';
import ChallengeManagerPage from './challenge/ChallengeManagerPage';
import ChallengeUserPage from './challenge/ChallengeUserPage';
import ChallengeRegister from './challenge/ChallengeRegister';
function App(props) {
  const [login, setLogin] = useState(true);


  return (
    <>
    <BrowserRouter>
      <ScrollToTop/>
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


        {login?
          <Route path='/record' element={<RecordPage/>}/>
          :<Route path='/record' element={<Navigate replace to = "/login"/>}/>
        }
        {login?
          <Route path='/challenge' element={<Challenge/>}/>
          :<Route path='/challenge' element={<Navigate replace to = "/login"/>}/>
        }
        
      </Routes>  
    </BrowserRouter>
    
    </>
  );
}

export default App;
