import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


function Login() {

    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const [errors, setErrors] = useState(false)
    const [loginErrors, setLoginErrors] = useState([])

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
        .catch(function (error) {
            console.log(error)
            // setLoginErrors(error.response.data.errors)
        })
    }

    //console.log(loginErrors)

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
        <a href='/signup'>Don't have an account?</a>
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
    </>
  )
}

export default Login