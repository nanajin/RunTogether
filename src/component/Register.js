import React,{useState, useEffect} from 'react'
import styles from './Register.module.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const navigate = useNavigate()
    const [user,setUser] = useState({
        name:'',
        email:'',
        pw:'',
        password2:'',
        gender:'M',
    })
    const {name, email, pw, password2, gender} = user

    const onChange = function(e){
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const checkEmail = ()=>{
      axios({
        method: 'GET',
        url: '/api/checkEmail',
        params: {email: email},
      }).then(res=>{
        alert(res.data);
      }).catch(e=>{
        alert(e.response.data);
      })
    }
    const checkName = () =>{
      axios({
        method: 'GET',
        url: '/api/checkName',
        params: {name: name},
      }).then(res=>{
        alert(res.data);
      }).catch(e=>{
        alert(e.response.data);
      })
    }

    const onSubmit = function(e){
        e.preventDefault();
        
        if(!name || !email || !pw || !password2 || !gender){
            return alert("Please add all fields")
        }


        if (pw !== password2){
            alert('비밀번호가 일치하지 않습니다')
            //setUser({name:'',email:'',pw:'',password2:'',})
        }
        else{
            const userData = {name:name,email:email,pwd:pw,gender:gender}
            
            axios({
              method: 'POST',
              url: '/api/join',
              data: userData,
            }).then(res=>{
                alert('회원가입에 성공하셨습니다! 다시 로그인해주세요.');
                navigate('/login');
            }).catch(e=>{
              alert(e);
            })            
        }
    }

  return (
      <>
      <h3 className={styles.register_title}>Sign Up</h3>
      <div className={styles.register_bg}>
          <div className={styles.register_container}>
            <h2>Sign Up</h2>
            <form className={styles.register_form} >
                <input className={styles.register_box} type='text' placeholder='Name' name='name' value={user.name} onChange={onChange}/>
                <input className={styles.register_box} type='email' placeholder='Email' name='email' value={user.email} onChange={onChange}/>
                <input className={styles.register_box} type='password' placeholder='Password' name='pw' value={user.pw} onChange={onChange}/>
                <input className={styles.register_box} type='password' placeholder='Check PW' name='password2' value={user.password2} onChange={onChange}/>
                <div className={styles.register_radio}><input checked type='radio' name='gender' value='M' onChange={onChange}/><label>남성</label></div>
                <div className={styles.register_radio}><input type='radio' name='gender' value='F' onChange={onChange}/><label>여성</label></div>
            </form>
            <button onClick={checkName} className={styles.name_btn}>이름 중복 확인</button>
            <button onClick={checkEmail} className={styles.email_btn}>이메일 중복 확인</button>
            <button onClick={onSubmit} className={styles.register_btn} >Register</button>

          </div>
      </div>
      </>
  )
}

export default Register