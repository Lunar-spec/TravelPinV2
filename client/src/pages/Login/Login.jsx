import { GiAstronautHelmet } from 'react-icons/gi'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Login.scss'

const Login = () => {

    const [viewPwd, setViewPwd] = useState('password')

    const handleViewPwd = () => {
        viewPwd === 'password' ?
            setViewPwd('text') : setViewPwd('password')
    }

    return (
        <div className="login-container">
            <div className="left">
                <span className='title'>Halt! State your cyber credentials, brave voyager!</span>
                <GiAstronautHelmet className='icon'/>
                <Link to={'/register'} className='register'>Join Us</Link>
            </div>
            <div className="right">
                <form className='login-form'>
                    <input type="text" placeholder='username' name='username' />
                    <div className="password-component">
                        <input type={viewPwd} placeholder='password' name='password' className='pwd' />
                        {viewPwd === 'text' ? <FaEye className='pwd-icon active' onClick={handleViewPwd} /> : <FaEyeSlash className='pwd-icon' onClick={handleViewPwd} />}
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login