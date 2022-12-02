import React, { useState, useEffect } from 'react'
import axios from 'axios'


import HeaderNav from './HeaderNav'

function Arms({ biceps }) {

  
  const [triceps, setTriceps] = useState({})

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
        { biceps ? <>

        <h2>{biceps.data[1].biceps_workout}</h2>
        <video width={450} height={100}src={biceps.data[0].biceps_clip}></video>
        <ul>
            <li>{biceps.data[0].biceps_step_one}</li>
            <li>{biceps.data[0].biceps_step_two}</li>
            <li>{biceps.data[0].biceps_step_three}</li>
        </ul>

        <h2>{biceps.data[1].biceps_workout}</h2>
        <video width={450} height={100}src={biceps.data[1].biceps_clip}></video>
        <ul>
            <li>{biceps.data[1].biceps_step_one}</li>
            <li>{biceps.data[1].biceps_step_two}</li>
            <li>{biceps.data[1].biceps_step_three}</li>
        </ul>

        <h2>{biceps.data[2].biceps_workout}</h2>
        <video width={450} height={100}src={biceps.data[2].biceps_clip}></video>
        <ul>
            <li>{biceps.data[2].biceps_step_one}</li>
            <li>{biceps.data[2].biceps_step_two}</li>
            <li>{biceps.data[2].biceps_step_three}</li>
        </ul>
        </>
        :
        <span>Loading</span> }

    </>
  )
}

export default Arms