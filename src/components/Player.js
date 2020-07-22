import React from "react";

export default function Player(props) {
  console.log("WHAT ARE PROPS?", props);
  // nothing, because we didn't set props -> undefined?
  // empty object {}
  return (
    <div>
      <h2>Player: {props.name}</h2>
    </div>
  );
}
