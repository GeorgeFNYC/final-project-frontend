import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import NewProfile from './NewProfile'
import Arms from './Arms.js'
import Chest from './Chest'
import Abs from './Abs'
import Legs from './Legs'
import Map from './Map'
import NotFound from './NotFound'



function App() {

  const token = localStorage.getItem('jwt');
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({});

  const [abs, setAbs] = useState(["Forearm Plank", "Laying Leg Raises"])

  const [workouts, setWorkouts] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/workouts')
      .then((r) => {
        setWorkouts(r.data)
      })
    }, [])

  function signOut() {
    localStorage.removeItem('jwt');
    setCurrentUser({});
    setIsSignedIn(false);
    navigate('/');
  }

  function grabWorkoutName() {

  }

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home isSignedIn={isSignedIn}/> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/signup' element={ <Signup /> } />
        <Route path='/profile' element={ <Profile abs={abs} signOut={signOut} /> } />
        <Route path='/newprofile' element={ <NewProfile signOut={signOut} /> } />
        <Route path='/arms' element={ <Arms workouts={workouts}/> }/>
        <Route path='/chest' element={ <Chest workouts={workouts}/> }/>
        <Route path='/abs' element={ <Abs setAbs={setAbs}abs={abs} workouts={workouts}/> }/>
        <Route path='/legs' element={ <Legs workouts={workouts}/> }/>
        <Route path='/map' element={ <Map /> }/>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
