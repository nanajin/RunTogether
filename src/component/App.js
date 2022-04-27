import '../component/App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import MainPage from '../page/MainPage';
import SignUpPage from '../page/SignUpPage';
import Login from '../staticComponent/Login';
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
import Chat from './Chat/Chat';
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
        <Route path='/mypage' element={<UserUpdate/>}/>

        {login?
          <Route path='/record' element={<RecordPage/>}/>
          :<Route path='/record' element={<Navigate replace to = "/login"/>}/>
        }
        {login?
          <Route path='/challenge' element={<Challenge/>}/>
          :<Route path='/challenge' element={<Navigate replace to = "/login"/>}/>
        }
        {login?
          <Route path='/chat' element={<Chat/>}/>
          :<Route path='/chat' element={<Navigate replace to = "/login"/>}/>
        }
      </Routes>  
    </BrowserRouter>
    
    </>
  );
}

export default App;
