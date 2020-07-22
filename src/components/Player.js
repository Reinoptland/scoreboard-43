import React, { useState } from "react";

export default function Player(props) {
  console.log("WHAT ARE PROPS?", props);
  const [score, setScore] = useState(0);

  // event handler
  function incrementScore() {
    console.log("GIVE THIS PERSON A POINT!", props.name);
    const newScore = score + 1;
    // call the "setter" to update the state
    setScore(newScore);
  }
  return (
    <div>
      <h2>Player: {props.name}</h2>
      <p>Score: {score}</p>
      <div>
        {/* add onClick event listener */}
        <button onClick={incrementScore}>+</button>
      </div>
    </div>
  );
}
