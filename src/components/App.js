import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import Signup from './Signup'
import Arms from './Arms.js'
import Chest from './Chest'
import Abs from './Abs'


function App() {
  const token = localStorage.getItem('jwt');
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({});

  const [biceps, setBiceps] = useState({})
  const [triceps, setTriceps] = useState({})
  const [forearms, setForearms] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/biceps')
      .then((r) => {
        setBiceps(r.data)
        console.log(r.data)
      })
    }, [])

    useEffect(() => {
      axios.get('http://127.0.0.1:3000/triceps')
        .then((r) => {
          setTriceps(r.data)
          console.log(r.data)
        })
      }, [])

      useEffect(() => {
        axios.get('http://127.0.0.1:3000/forearms')
          .then((r) => {
            setForearms(r.data)
            console.log(r.data)
          })
        }, [])

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
        <Route path='/arms' element={ <Arms triceps={triceps} biceps={biceps} forearms={forearms}/> }/>
        <Route path='/chest' element={<Chest />}/>
        <Route path='abs' element={<Abs />}/>
      </Routes>
    </>
  );
}

export default App;
