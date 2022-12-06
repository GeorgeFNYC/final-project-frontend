import React from 'react'

import HeaderNav from './HeaderNav'

function Chest({ workouts }) {

  const myStyle = {
    width: '20%',
    height: 'auto',
  }


  return (
    <>
        <HeaderNav />
        <h1>Chest</h1>
        <div className='workoutsDiv'>
          <div className='workouts'>
            {workouts.slice(6, 9).map(chest => {
              return (
                <>
                  <h3>{chest.name}</h3>
                  <video style={myStyle} src={chest.video_clip}></video>
                  <p>{chest.workout_description}</p>
                </>
              )
            })}
          </div>
        </div>
    </>
  )
}

export default Chest