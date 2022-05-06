import React ,{useState, useEffect}from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from './Login.module.css'
interface longinData{
    email:string,
    pw:string,
}

function Login() {

    const navigate = useNavigate()
    const [loginData, setLoginData] = useState<longinData>({
        email:'',
        pw:'',
    })
    const {email, pw} = loginData
    const onSubmit = function(e:React.FormEvent){
        e.preventDefault();

        if(!email || !pw ){
            return alert("Please add all fields")
        }
        const userData = {email:email, pwd:pw}

        
        fetch('/api/login',{
            //폼 데이터 fetch 
            method:'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
        }).then((response) => {
            if(response.ok){
                navigate('/');
                alert("환영합니다");
                if(response.ACCESS_TOKEN){
                  localStorage.setItem('login-token', response.ACCESS_TOKEN);
                }
            }
            else{
                alert(`오류 발생 Status : ${response.status}`)
            }
        })
        
    }
    const onChange = function(e:React.ChangeEvent<HTMLInputElement>){
        setLoginData(prevState=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
  return (
      <>
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
      </div>
      </div>
</>
  )
}

export default Login;