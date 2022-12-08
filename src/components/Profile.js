import React, { useState } from "react";

import HeaderNav from "./HeaderNav";

function Profile({ signOut, abs }) {
  const [chest, setChest] = useState([
    "Dumbbell Incline Chest Flys",
    "Incline Dumbbell Bench Press",
    "Dumbbell Bench Press",
  ]);
  

  const arms = ["Dumbbell"];
  // const abs = ["Forearm Plank", "Laying Leg Raises"];
  const legs = [
    "Pull Through",
    "Stiff Leg Deadlifts",
    "Dumbbell Goblet Good Morning",
    "Dumbbell Calf Raise",
    "Barbell Calf Raises",
  ];

  return (
    <>
      <HeaderNav />
      <div className="currentUserProfile">
        <div className="headerProfile">
          <h1>Welcome back</h1>
        </div>
        <div className="completedWorkout">
          <div className="workouts">
            <h2>Arms</h2>
            <ul>
              <li>Dumbbell Workout</li>
            </ul>
          </div>
          <div className="workouts">
            <h2>Chest</h2>
            <ul>
              {chest.map((workout) => {
                return (
                  <li
                    onClick={() => {
                      setChest(chest.filter((ex) => {
                        return workout !== ex
                      }));
                    }}
                  >
                    {workout}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="workouts">
            <h2>Abs</h2>
            <ul>
              {abs.map((workout => {
                return (
                  <li>{workout}</li>
                )
              }))}
            </ul>
          </div>
          <div className="workouts">
            <h2>Legs</h2>
            <ul>
              <li>Pull Through</li>
              <li>Stiff Leg Deadlifts</li>
              <li>Dumbbell Goblet Good Morning</li>
              <li>Dumbbell Calf Raise</li>
              <li>Barbell Calf Raises</li>
            </ul>
          </div>
        </div>
        <div className="letsAddText">
          <p>Let's add some more workouts!</p>
        </div>
        <div className="miniNav">
          <ul id="profileUL">
            <a className="profileLinks" href="/arms">
              <li className="profileLI">Arms</li>
            </a>
            <a className="profileLinks" href="/chest">
              <li className="profileLI">Chest</li>
            </a>
            <a className="profileLinks" href="/abs">
              <li className="profileLI">Abs</li>
            </a>
            <a className="profileLinks" href="/legs">
              <li className="profileLI">Legs</li>
            </a>
          </ul>
        </div>
        <button className='buttons' onClick={signOut}>Sign Out</button>
      </div>
    </>
  );
}

export default Profile;
