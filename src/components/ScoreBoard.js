import React from "react";
import Player from "./Player";

export default function ScoreBoard() {
  // store the state of the players here, so we can:
  // - compare them
  // - sort them by score

  return (
    <div>
      <h1>I AM A SCOREBOARD</h1>
      <Player name="Karla" />
      <Player name="Lisa" />
      <Player name="David" />
      <Player name="Rein" />
    </div>
  );
}
