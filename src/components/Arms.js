import React, { useState, useEffect } from 'react'
import axios from 'axios'


import HeaderNav from './HeaderNav'

function Arms({ biceps, triceps, forearms }) {

  // useEffect(() => {
  // fetch('http://127.0.0.1:3000/biceps')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setBiceps(data)
  //   })
  // }, [])

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:3000/triceps')
  //     .then((data) => {
  //       setTriceps(data)
  //     })
  // }, [])


  return (
    <>
      <HeaderNav />
      <h1>Arms</h1>
      <h2>Biceps</h2>
      <h3>{biceps[0]?.biceps_workout}</h3>
      <video width={450} height={100}src={biceps[0]?.biceps_clip}></video>
      <ul>
          <li>{biceps[0]?.biceps_step_one}</li>
          <li>{biceps[0]?.biceps_step_two}</li>
          <li>{biceps[0]?.biceps_step_three}</li>
      </ul>

      <h3>{biceps[1]?.biceps_workout}</h3>
      <video width={450} height={100}src={biceps[1]?.biceps_clip}></video>
      <ul>
          <li>{biceps[1]?.biceps_step_one}</li>
          <li>{biceps[1]?.biceps_step_two}</li>
          <li>{biceps[1]?.biceps_step_three}</li>
      </ul>
      <h2>Triceps</h2>
      <h3>{triceps[0]?.triceps_workout}</h3>
      <video width={450} height={100}src={triceps[0]?.triceps_clip}></video>
      <ul>
          <li>{triceps[0]?.triceps_step_one}</li>
          <li>{triceps[0]?.triceps_step_two}</li>
          <li>{triceps[0]?.triceps_step_three}</li>
      </ul>

      <h3>{triceps[1]?.triceps_workout}</h3>
      <video width={450} height={100}src={triceps[1]?.triceps_clip}></video>
      <ul>
          <li>{triceps[1]?.triceps_step_one}</li>
          <li>{triceps[1]?.triceps_step_two}</li>
          <li>{triceps[1]?.triceps_step_three}</li>
      </ul>

      <h2>Forearms</h2>
      <h3>{forearms[0]?.forearms_workout}</h3>
      <video width={450} height={100}src={forearms[0]?.forearms_clip}></video>
      <ul>
          <li>{forearms[0]?.forearms_step_one}</li>
          <li>{forearms[0]?.forearms_step_two}</li>
          <li>{forearms[0]?.forearms_step_three}</li>
      </ul>

      <h3>{forearms[1]?.forearms_workout}</h3>
      <video width={450} height={100}src={forearms[1]?.forearms_clip}></video>
      <ul>
          <li>{forearms[1]?.forearms_step_one}</li>
          <li>{forearms[1]?.forearms_step_two}</li>
          <li>{forearms[1]?.forearms_step_three}</li>
      </ul>
    </>
  )
}

export default Arms