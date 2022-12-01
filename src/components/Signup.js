import React, { useEffect, useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom' 
import axios from 'axios'

function Signup() {

    const navigate = useNavigate()

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    // const passwordConfirmRef = useRef()

    const handleSignup = (e) => {
        e.preventDefault()
        console.log(passwordRef)
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
        })
    }


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
    </>
  )
}

export default Signup