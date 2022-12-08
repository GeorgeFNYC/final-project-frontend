import React from 'react'

import HeaderNav from './HeaderNav'

function Chest({ workouts }) {
  return (
    <>
        <HeaderNav />
        <h1 className='headerBodyParts'>Chest</h1>
        <div className='workoutsDiv'>
            {workouts.slice(6, 9).map(chest => {
              return (
                <div className='workouts'>
                  <h3 className='workoutName'>{chest.name}</h3>
                  <video className='workoutClips' loop controls src={chest.video_clip}></video>
                  <p className='workoutInfo'>{chest.workout_description}</p>
                </div>
              )
            })}
        </div>
    </>
  )
}

export default Chest