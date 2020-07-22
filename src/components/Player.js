import React from "react";

export default function Player(props) {
  console.log("WHAT ARE PROPS?", props);

  return (
    <div>
      <h2>Player: {props.name}</h2>
      <div></div>
    </div>
  );
}
