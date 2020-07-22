import React, { useState } from "react";

export default function Player(props) {
  console.log("WHAT ARE PROPS?", props);
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>Player: {props.name}</h2>
      <p>Score: {score}</p>
    </div>
  );
}
