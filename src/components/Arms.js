import React, { useState, useEffect } from 'react'


import HeaderNav from './HeaderNav'

function Arms() {

  const [arms, setArms] = useState({})

  useEffect(() => {
   fetch('http://127.0.0.1:3000/biceps')
   .then((res) => res.json())
    .then((data) => {
      setArms(data)
    })
  }, [])



  console.log(arms[0].biceps_workout)

  return (
    <>
        <HeaderNav />
        <h1>Arms</h1>
        <h2></h2>
        <video src={''}></video>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </>
  )
}

export default Arms