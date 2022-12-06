import React from 'react'

import HeaderNav from './HeaderNav'

function Abs({ workouts }) {

  const myStyle = {
    width: '20%',
    height: 'auto',
  }

  return (
    <>
        <HeaderNav />
        <h1>Abs</h1>
        <div className='workoutsDiv'>
          <div className='workouts'>
            {workouts.slice(9, 12).map(abs => {
              return (
                <>
                  <h3>{abs.name}</h3>
                  <video style={myStyle}src={abs.video_clip}></video>
                  <p>{abs.workout_description}</p>
                </>
              )
            })}
          </div>
        </div>
    </>
  )
}

export default Abs