import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './Home'
import Login from './Login'
import Profile from './Profile'


function App() {
  const token = localStorage.getItem('jwt');
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/profile', {
      headers: {
        Authorization: 'Bearer' + token,
      },
    })
    .then((res) => res.json())
    .then((data) => {
      setCurrentUser(data)
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        {token ? 
          (<Route path='/profile' component={ <Profile /> } user={currentUser} />)
          :
          (<Route path='/redirect' element={<Navigate to='/login' replace />} />)
        }
        <Route path='/login' element={ <Login /> } />
        <Route path='/profile' element={ <Profile /> } />
      </Routes>
    </>
  );
}

export default App;
