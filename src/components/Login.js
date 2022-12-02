import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {

    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(false)

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
            console.log(data)
            if (data.token !== undefined) {
                localStorage.setItem('jwt', data.token);
                navigate('/profile');
            } else {
                setErrors(true)
            }
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
        {errors ?
            <li>Sorry Username or Password is incorrect</li>
            :
            null
        }
    </>
  )
}

export default Login