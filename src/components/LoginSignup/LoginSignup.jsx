import React from 'react'
import email_icon from '../assets/email-icon.png'
import password_icon from '../assets/password-icon.png'
import profile_icon from '../assets/profile-icon.png'
import './LoginSignup.css'

const LoginSignup  = () => {
  return (
    <div className='container'> 
        <div className="header">
            <div className="text">Sign in</div>
            <div className="underline"></div>
        </div>

        <div className="input-area">

            <div className="input">
                <img src={profile_icon}/>
                <input type="Name" placeholder=' Name'/>
            </div>

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="E-mail" placeholder=' E-mail'/>
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="Password" placeholder=' Password' />
            </div>
            <div className='forget-password'>Forget Password</div>
        </div>
        <div className="submit-div">
                <div className="submit">
                    Sign in
                </div>
            </div>
    </div>
  )
}

export default LoginSignup;
