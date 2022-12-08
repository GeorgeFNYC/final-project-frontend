import React, { useEffect, useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom' 
import axios from 'axios'
import HeaderNav from './HeaderNav'

function Signup() {

    const navigate = useNavigate()

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()

    const [errors, setErrors] = useState(false)
    const [signupErrors, setSignupErrors] = useState([])
    // const passwordConfirmRef = useRef()

    const handleSignup = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/users', 
            {
                first_name: firstNameRef.current.value,
                last_name: lastNameRef.current.value,
                username: usernameRef.current.value,
                password: passwordRef.current.value,
                // confirmPassword: passwordConfirmRef.current.value
            })
        .then((r) => {
            if (r.data.token !== undefined) {
                localStorage.setItem('jwt', r.data.token);
                navigate('/profile');
            } else {
                setErrors(true)
            }
        })

        .catch(function (error) {
            setSignupErrors(error.response.data.errors)
        })
    }

    console.log(signupErrors)


  return (
    <>
    <HeaderNav />
        <div className='loginContainer'>
            <form onSubmit={handleSignup}>
                <div className='inputField'>
                    <input
                        type='text'
                        ref={firstNameRef}
                        placeholder='First Name'
                    >
                    </input>
                </div>
                <div className='inputField'>
                    <input
                        type='text'
                        ref={lastNameRef}
                        placeholder='Last Name'
                    >
                    </input>
                </div>
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
                        ref={passwordRef}
                        type='text'
                        placeholder='Password'
                    >
                    </input>
                </div>
                <div className='inputBtnDiv'>
                    <button className='loginSignUpBtn' type='submit' value='sign up'>Sign Up</button>
                    <a className='formSwitch' href='/login'>Already have an account?</a>
                </div>
            </form>
        </div>
        <div className='loginSignInErrors'>
            <ul>
                {signupErrors === undefined || signupErrors.length === 0 ?
                    null
                    :
                    signupErrors.map(error => {
                        return (
                                <li key={error.id}>{error}</li>
                        )
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default Signup