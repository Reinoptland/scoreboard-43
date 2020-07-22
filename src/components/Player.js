import React from "react";

export default function Player(props) {
  console.log("WHAT ARE PROPS?", props);

  function handleClick() {
    props.incrementScore(props.id);
  }
  return (
    <div>
      <h2>Player: {props.name}</h2>
      <p>Score: {props.score}</p>
      <div>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}
