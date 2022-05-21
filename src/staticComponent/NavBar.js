import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../staticComponent/NavBar.css';
import {FaBars} from 'react-icons/fa';

function NavBar() {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const MenuBar = ()=>{
    if(isToggled){
      <FaBars className='icon'/>
    }
  }
  return(
    <div className='navigation'>
    {/* toggled는 모바일 화면 상
     <Icon isToggled={isToggled} userToggled={userToggled}></Icon>
      <div className='toggle' onClick={()=>{
        setIsToggled(!isToggled);
      }}> */}
      {/* let icon = {!isToggled? <FaApple/>:<FaTimes/>} */}

      {/* </div>
      <div className='user' onClick={()=>{
        setUserToggled(!userToggled);
      }}>
      </div> */}
      
      <p className='logo'>
        <Link to='/'>Run Together</Link>
      </p>
        <ul className='header-menulist'>
            <Link to ='/challenge'><li>Challenge</li></Link>
            <Link to ='/'><li>Mate</li></Link>
            <Link to ='/'><li>Community</li></Link>
            <Link to ='/record'><li>Record</li></Link>
        </ul>

        <ul className='header-user'>
          <Link to ='/login'><li>Login</li></Link>
          <Link to ='/signup'><li>Sign Up</li></Link>
        </ul>

     </div>
  );
}

export default NavBar;
