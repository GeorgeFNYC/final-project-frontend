import React from 'react'
import Chest from './Chest'

import HeaderNav from './HeaderNav'

function Legs({ workouts }) {

  const myStyle = {
    width: '20%',
    height: 'auto',
  }

  return (
    <>
        <HeaderNav />
        <h1>Legs</h1>
        <div className='workoutsDiv'>
          <div className='workouts'>
            {workouts.slice(12, 20).map(leg => {
              return (
                <>
                  <h3>{leg.name}</h3>
                  <video style={myStyle} src={leg.video_clip}></video>
                  <p>{leg.workout_description}</p>
                </>
              )
            })}
          </div>
        </div>
    </>
  )
}

export default Legs