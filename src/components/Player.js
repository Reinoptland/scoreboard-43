import React from "react";

export default function Player(props) {
  console.log("WHAT ARE PROPS?", props);

  function handleClick() {
    // 4. call our callback prop (the function can change score)
    // 5. pass it the id of the player as an argument
    // (how else will we know who to give a point?)
    props.incrementScore(props.id);
  }
  return (
    <div>
      <h2>Player: {props.name}</h2>
      <p>Score: {props.score}</p>
      <div>
        {/* 3. Add a event listener & handler */}
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}
