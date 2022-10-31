import React, {useState} from 'react';
import './LogIn.css';
import LogoImage from '../../assets/images/logo-image.png';
import TextField from '@mui/material/TextField';
import { MdAlternateEmail } from "react-icons/md";
import { BiLock } from "react-icons/bi";
import GoogleIcon from "../../assets/images/google-icon.png";
import Slide2 from "../../assets/images/slide2.png";
import { POST } from '../../Api/Post';
import { LOGIN } from '../../Api/EndPoints';
import {setUser} from '../../Store/Actions/Actions';

import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
export default function LogIn() {
const history = useHistory()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('emerge2001@gmail.com');
    const [password, setPassword] = useState('Testing123');

    const loginHandler = ()=>{
      let  data = {
            
                "email" : email,
                "password" : password
            
        }
POST(data,LOGIN,"post").then(res=>{

    console.log(res)
    dispatch(setUser(res.user))
    history.push("profile")

}).catch((error)=>{
    console.log(error)
})
        
    }

  return (
    <div className='login-container'>
        <div className='login-image-section'>
                <img src={Slide2} />
        </div>

        <div className='login-credentials-section'>
            <div className='logo-container'>
                <img src={LogoImage} alt='healthcare logo image'/>
            </div>

            <div className='login-hello-text'>
                <h1>Hello Again!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

        <div>
            <div style={{marginTop:"4rem", position:"relative"}}>
                <TextField 
                className='email-text-field' 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                value={email}
                onChange={e=> setEmail(e.target.value)}
                />
                <MdAlternateEmail className='email-icon'/>
            </div>

            <div style={{marginTop:"2rem", position:"relative"}}>
                <TextField 
                className='email-text-field' 
                id="outlined-basic" 
                label="Password" 
                variant="outlined" 
                value={password}
                onChange={e=> setPassword(e.target.value)}
                />
                <BiLock className='email-icon'/>
            </div>
        </div>

        <div className='remember-box'>
            <div style={{display:"flex"}}>
                <input className='remember-checkbox' type="checkbox"/>
                <p className='remember'>Remember Me</p>
            </div>
            <div>
                <p className='recovery-text'>Recovery Password</p>
            </div>
        </div>

        <div className='login-btns'>
            <button className='login-btn' onClick={()=>{
                loginHandler()
            }}>Login</button>
            <button className='signin-btn'><img src={GoogleIcon} alt="Google Logo"/>Sign in with Google</button>
        </div>

        <div className='footer-text'>
            <p>Don't have an account yet? <span className='signup-text'>Sign Up</span></p>
        </div>

        </div>
    </div>
  )
}
