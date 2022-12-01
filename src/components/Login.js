import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ signOut }) {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}>
            </input>
            <label>Enter password</label>
            <input
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}>
            </input>
            <input type='submit' value='login'></input>
        </form>
        <input onClick={signOut} type='submit' value='sign out'></input>
    </>
  )
}

export default Login