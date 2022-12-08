import React from 'react'


import HeaderNav from './HeaderNav'

function Arms({ workouts }) {



  return (
    <>
      <HeaderNav />
      <h1>Arms</h1>
      <div className='workoutsDiv'>
          {workouts.slice(0,6).map(arm => {
            return (
              <div className='workouts'>
                <h3 className='workoutName'>{arm.name}</h3>
                <video className='workoutClips' loop controls src={arm.video_clip}></video>
                <p className='workoutInfo'>{arm.workout_description}</p>
              </div>
            )
          })}
        </div>
    </>
  )
}

export default Arms