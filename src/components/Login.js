import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


function Login() {

    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const [errors, setErrors] = useState(false)
    const [customError, setLoginErrors] = useState([])

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');


    const handleLogIn = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/login', {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
    )
    .then((r) => {
        if (r.data.token !== undefined) {
            localStorage.setItem('jwt', r.data.token);
            navigate('/profile');
        } else {
            setErrors(true);
            console.log('error')
        }
    })

    .catch(function (error) {
        setLoginErrors(error.response.data)
    })
}
console.log(customError, 'hello')

  return (
    <>
        <form onSubmit={handleLogIn}>
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
        {/* {customError === undefined || customError.length === 0 ?
        null
        :
        customError.map(error => {
            return (
                <ul>
                    <li>{error}</li>
                </ul>
            )
        })
        } */}
        <a href='/signup'>Don't have an account?</a>
    </>
  )
}

export default Login