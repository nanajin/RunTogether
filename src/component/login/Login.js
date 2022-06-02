import axios from 'axios'
import React ,{useState, useEffect}from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useRecoilState } from 'recoil'
import styles from '../Login.module.css'
import {loginState, userState} from '../../staticComponent/state'
import ErrorPage from '../../page/ErrorPage'

function Login() {
    const [login, setLogin] = useRecoilState(loginState);
    const [user, setUser] = useRecoilState(userState);
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        email:'',
        pw:'',
    })
    const {email, pw} = loginData

    const onSubmit = (e)=>{
        e.preventDefault();

        if(!email || !pw ){
            return alert("Please add all fields")
        }
        const userData = {email:email, pwd:pw}
        
        axios({
          url:"/api/login",
          method:"POST",
          data: userData,
        }).then(res=>{
          // localStorage.setItem("login", true);
          // setLogin(localStorage.getItem("login"));
          setLogin(true);
          alert("환영합니다");
          axios.get('/api/').then(res=>{
            setUser(res.data);
            // localStorage.setItem("nickname", res.data);
            // setUser(localStorage.getItem("nickname"));
          }); 
          if(user !== ''){
            navigate('/');
          }
          else{
            navigate('/loading');
          }
        }).catch(e=>{
          alert(e);
        })
        // setUser(localStorage.getItem("nickname"));
    }
    const onChange = (e)=>{
        setLoginData(prevState=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    
  return (
      <>
      
      <h3 className={styles.login_title}>Login</h3>

      <div className={styles.bg}>
      <div className={styles.login_container}>
        <form className={styles.login_form} onSubmit={onSubmit}>
            <div className={styles.welcome_title}>
                <p>Welcome to Run-Together</p>
            </div>
            <h2>Email</h2>
            <input className={styles.login_box} type="email" name='email' placeholder='Enter your email' onChange={onChange}/>
            <h2>Password</h2>
            <input className={styles.login_box} type="password" name='pw' placeholder='Enter your password' onChange={onChange}/>
            <div className='margin'>
                <button type='submit' className={styles.login_btn}>Login</button>
            </div>
            <div>
                <Link to='/signup'>
                <button className={styles.login_btn}>Sign Up</button>
                </Link>
            </div>
        </form>

      </div>
      </div>
</>
  )
}

export default Login;