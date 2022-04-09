import '../component/App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../page/MainPage';
import SignUpPage from '../page/SignUpPage';
import Login from './Login';
import RecordPage from '../page/RecordPage';
import ChallengePage from '../page/ChallengePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<MainPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/record' element={<RecordPage/>}/>
        <Route path='/challenge' element={<ChallengePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
