import React from 'react'


import HeaderNav from './HeaderNav'

function Arms({ workouts }) {

  const myStyle = {
    width: '20%',
    height: 'auto',
  }

  return (
    <>
      <HeaderNav />
      <h1>Arms</h1>
      {workouts.slice(0,6).map(arm => {
            return (
              <>
                <h3>{arm.name}</h3>
                <video style={myStyle}src={arm.video_clip}></video>
                <p>{arm.workout_description}</p>
              </>
            )
          })}
    </>
  )
}

export default Arms