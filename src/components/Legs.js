import React, {useState} from 'react'

import HeaderNav from './HeaderNav'

function Legs({ workouts }) {

  const [link, setLink] = useState('/login')

const checkLogIn = () => {
    if (localStorage.getItem('jwt')) {
      setLink('/profile')
    } else {
      setLink('/login')
    }
}

  return (

    <>
        <HeaderNav />
        <h1 className='headerBodyParts'>Legs</h1>
        <div className='workoutsDiv'>
          <>
            {workouts.slice(12, 20).map(leg => {
              return (
                <div className='workouts'>
                  <h3 className='workoutName'>{leg.name}</h3>
                  <video className='workoutClips' loop controls src={leg.video_clip}></video>
                  <p className='workoutInfo'>{leg.workout_description}</p>
                  <a onClick={checkLogIn} href={link}><button>Add workout to your profile</button></a>
                </div>
              )
            })}
          </>
        </div>
    </>
  )
}

export default Legs