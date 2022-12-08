import React from 'react'

import HeaderNav from './HeaderNav'

function Abs({ workouts, abs, setAbs }) {
  return (
<>
        <HeaderNav />
        <h1 className='headerBodyParts'>Abs</h1>
        <div className='workoutsDiv'>
            {workouts.slice(9, 12).map(ab => {
              return (
                <div className='workouts'>
                  <h3 onClick={() => {
                    setAbs([...abs, ab.name])
                  }}className='workoutName'>{ab.name}</h3>
                  <video className='workoutClips' loop controls src={ab.video_clip}></video>
                  <p className='workoutInfo'>{ab.workout_description}</p>
                </div>
              )
            })}
        </div>
    </>
  )
}

export default Abs