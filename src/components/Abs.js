import React from 'react'

import HeaderNav from './HeaderNav'

function Abs({ workouts }) {
  return (
<>
        <HeaderNav />
        <h1 className='headerBodyParts'>Abs</h1>
        <div className='workoutsDiv'>
            {workouts.slice(9, 12).map(abs => {
              return (
                <div className='workouts'>
                  <h3 className='workoutName'>{abs.name}</h3>
                  <video className='workoutClips' loop controls src={abs.video_clip}></video>
                  <p className='workoutInfo'>{abs.workout_description}</p>
                </div>
              )
            })}
        </div>
    </>
  )
}

export default Abs