import { GiPirateHat } from 'react-icons/gi'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import "./Register.scss";
import { useState } from 'react';

const Register = () => {

    const [viewPwd, setViewPwd] = useState('password')

    const handleViewPwd = () => {
        viewPwd === 'password' ?
        setViewPwd('text') : setViewPwd('password')
    }

    return (
        <div className="register-container">
            <div className="left">
                <div>
                    <GiPirateHat className="icon" />
                </div>
                <span className="title">Avast, me heartie! Prepare to be the digital &apos;X&apos; on our treasure map - sign up and let the swashbucklin&apos; commence!</span>
            </div>
            <div className="right">
                <form>
                    <input type="text" placeholder="username" />
                    <input type="email" placeholder="email" />
                    <div className="password-component">
                        <input type={viewPwd} placeholder="password" />
                        <input type={viewPwd} placeholder="confirm password" />
                        {viewPwd === 'text' ? <FaEye className='pwd-icon active' onClick={handleViewPwd} /> : <FaEyeSlash className='pwd-icon' onClick={handleViewPwd} />}
                    </div>
                    <button>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
