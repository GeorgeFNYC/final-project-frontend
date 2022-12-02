import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import Signup from './Signup'


function App() {
  const token = localStorage.getItem('jwt');
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate()

  // useEffect(() => {
  //   fetch('http://localhost:3000/profile', {
  //     headers: {
  //       Authorization: 'Bearer' + token,
  //     },
  //   })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setCurrentUser(data)
  //     setIsSignedIn(true)
  //   })
  // }, [])

  function signOut() {
    localStorage.removeItem('jwt');
    setCurrentUser({});
    setIsSignedIn(false);
    navigate('/');
  }

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home isSignedIn={isSignedIn}/> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/profile' element={ <Profile signOut={signOut} currentUser={currentUser}/> } />
        <Route path='/signup' element={ <Signup /> } />
      </Routes>
    </>
  );
}

export default App;
