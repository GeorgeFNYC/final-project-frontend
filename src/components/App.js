import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './Home'
import Login from './Login'
import Profile from './Profile'


function App() {
  const token = localStorage.getItem('jwt');
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate()

  useEffect(() => { token !== null ? 

    fetch('http://localhost:3000/profile', {
      headers: {
        Authorization: 'Bearer' + token,
      },
    })
    .then((res) => res.json())
    .then((data) => {
      setCurrentUser(data)
      setIsSignedIn(true)
    })
    :
    setIsSignedIn(false)
  }, [])

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
        <Route path='/login' element={ <Login signOut={signOut}/> } />
        <Route path='/profile' component={ <Profile /> } />
      </Routes>
    </>
  );
}

export default App;
