import React from 'react'

import HeaderNav from './HeaderNav'

function Legs({ workouts }) {


  return (
    <>
        <HeaderNav />
        <h1>Legs</h1>
        <div className='workoutsDiv'>
          <>
            {workouts.slice(12, 20).map(leg => {
              return (
                <div className='workouts'>
                  <h3 className='workoutName'>{leg.name}</h3>
                  <video className='workoutClips' loop controls src={leg.video_clip}></video>
                  <p className='workoutInfo'>{leg.workout_description}</p>
                </div>
              )
            })}
          </>
        </div>
    </>
  )
}

export default Legs