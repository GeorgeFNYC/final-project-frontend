import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

import HeaderNav from './HeaderNav';


function Login() {

    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const [errors, setErrors] = useState(false)
    const [loginErrors, setLoginErrors] = useState([])

    const [type, setType] = useState('password')
    const [icon, setIcon] = useState(eyeOff)

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye)
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/login', {
            username: usernameRef.current.value,
            passwordRef: passwordRef.current.value,
        })
        .then((r) => {
            if (r.data.token !== undefined) {
                localStorage.setItem('jwt', r.data.token)
                navigate('/profile')
            } else {
                setErrors(true)
            }
        })
        .catch (function(error) {
            setLoginErrors(error.response.data.errors)
        })

    }

    //console.log(loginErrors)

  return (
    <>
    <HeaderNav />
    <div className='loginContainer'>
        <form onSubmit={handleSubmit}>
            <div className='inputField'>
                <input
                    type='text'
                    ref={usernameRef}
                    placeholder='Username'
                >
                </input>
            </div>
            <div className='inputField'>
                <input
                    type={type}
                    ref={passwordRef}
                    placeholder='Password'
                    >
                </input>
                <span id='iconSpan' onClick={handleToggle}><Icon icon={icon} size={30}/></span>
            </div>
            <div id='inputBtnDiv'>
                <input className='loginSignUpBtn' type='submit' value='Login'></input>
                <a className='formSwitch' href='/signup'>Don't have an account?</a>
            </div>
        </form>
        {loginErrors === undefined || loginErrors.length === 0 ?
            null
            :
            loginErrors.map(error => {
                return (
                    <ul key={error.id}>
                        <li>{error}</li>
                    </ul>
                )
            })
        }
    </div>
    </>
  )
}

export default Login