import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom' 

function Signup() {

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

  return (
    <>
        <form>
            <label>First Name:</label>
            <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}>
            </input>
            <label>Last Name:</label>
            <input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}>
            </input>
            <label>Username:</label>
            <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}>
            </input>
            <label>Password:</label>
            <input
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}>
            </input>
            <label>Confirm Password:</label>
            <input
                type='text'
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}>
            </input>
        </form>
    </>
  )
}

export default Signup