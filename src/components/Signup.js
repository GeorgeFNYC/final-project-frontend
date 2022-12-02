import React, { useEffect, useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom' 
import axios from 'axios'

function Signup() {

    const navigate = useNavigate()

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()

    const [errors, setErrors] = useState(false)
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
            }
        )
        .then((r) => {
            console.log(r.data.token)
            if (r.data.token !== undefined) {
                localStorage.setItem('jwt', r.data.token);
                navigate('/profile');
            } else {
                setErrors(true)
            }

        })

        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data.errors)
            } else {
                console.log(error.response.data.errors)
            }
        })
    }

    console.log(errors)


  return (
    <>
        <form onSubmit={handleSignup}>
            <label>First Name:</label>
            <input
                type='text'
                ref={firstNameRef}
            >
            </input>
            <label>Last Name:</label>
            <input
                type='text'
                ref={lastNameRef}
            >
            </input>
            <label>Username:</label>
            <input
                type='text'
                ref={usernameRef}
            >
            </input>
            <label>Password:</label>
            <input
                ref={passwordRef}
                type='text'
            >
            </input>
            <input type='submit' value='sign up'></input>
            {/* <label>Confirm Password:</label>
            <input
                type='text'
                ref={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}>
            </input> */}
        </form>
        {errors ? 
            <li>Error</li>
        :
            null
        }
        <a href='/login'>Have an account</a>
    </>
  )
}

export default Signup