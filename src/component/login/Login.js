import axios from 'axios'
import React ,{useState, useEffect}from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { atom, useRecoilState } from 'recoil'
import styles from '../Login.module.css'
import loginState from '../../staticComponent/state'
import ErrorPage from '../../page/ErrorPage'

function Login() {
    const [login, setLogin] = useRecoilState(loginState);
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
          setLogin(true);
          alert("환영합니다"); 
          navigate('/');
        }).catch(e=>{
          <ErrorPage/>
        })
    }
    const onChange = (e)=>{
        setLoginData(prevState=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    const onLogout =()=>{
      axios({
        url:"/api/logout",
        method:"POST",
      }).then(res=>{
        console.log(res);
        // setLogin(false);
      })
    }
  return (
      <>
      
      <h3 className={styles.login_title}>Login</h3>

      <div className={styles.bg}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.title}>
                <p>Welcome to Run-Together</p>
            </div>
            <h2>Email</h2>
            <input className={styles.box} type="email" name='email' placeholder='Enter your email' onChange={onChange}/>
            <h2>Password</h2>
            <input className={styles.box} type="password" name='pw' placeholder='Enter your password' onChange={onChange}/>
            <div className='margin'>
                <button type='submit' className={styles.btn}>Login</button>
            </div>
            <div>
                <Link to='/signup'>
                <button className={styles.btn}>Sign Up</button>
                </Link>
            </div>
        </form>
        {/* <button className={styles.btn} onClick={onLogout}>Logout</button> */}

      </div>
      </div>
</>
  )
}

export default Login;