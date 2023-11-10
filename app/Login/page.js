"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from "./style.module.css"
import axios from 'axios'


const  login = () => {
  const router = useRouter();
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState('');
  // const [users,setUsers] = useState([]);

  const handleLogin = async (e) => {
     e.preventDefault();

    if (!username || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('/api/login', {username, password }); //enter backend api url to get loggin access
      const token = response.data.token;

    } catch (error) {
      console.error('Login failed', error);
      setError('Invalid username or password.');
    }
  };
  
  
  
  // const submitHandler=(e)=>{
  //   e.preventDefault();
  //   const newuser={username,password};
  //   setusers([...users,password])
  //   setUsername("")
  //   setpassword("");
  //   console.log(newuser)

  //   // send to backend via axios /fetch /api /action 
  // };


  return (
    <div className={style.main}>
       <div className={style.left}>
         <Image className={style.img} src="/office.jpg" height={800} width={700} alt='poto' priority={true} ></Image>
       </div>
       <div className={style.right}>
        <div className={style.formdiv}>
          <div className={style.text}>
            <h3>Welcome  to FCD login</h3>
          </div>
          <form onSubmit={handleLogin} >
            <h2 className={style.h2}>sign in</h2>
            <input autoComplete='current-username' className={style.input1}  onChange={(e)=>setUsername(e.target.value) }  type="text" name='username' placeholder='Enter user name' />
            <input autoComplete='current-password' className={style.input2}  onChange={(e)=>setPassword(e.target.value) } type="password" name='password' placeholder='Enter password' />
             {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className={style.button}>login</button>
          </form>
          
            <Link className= {style.forgot} href="/Forget">forgot password</Link>
        </div>
       </div>
    </div>
  )
}

export default  login