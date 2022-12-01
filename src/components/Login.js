import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login({ signOut }) {

    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.post('http://localhost:3000/auth/login', 
        // {

        // }
    

        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem('jwt', data.token);
            navigate('/profile');
        })
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Enter username:</label>
            <input
                type='text'
                ref={usernameRef}
            >
            </input>
            <label>Enter password</label>
            <input
                type='text'
                ref={passwordRef}
             >
            </input>
            <input type='submit' value='login'></input>
        </form>
        <input onClick={signOut} type='submit' value='sign out'></input>
    </>
  )
}

export default Login