import React from "react";
import Player from "./Player";

export default function ScoreBoard() {
  // store the state of the players here, so we can:
  // - compare them
  // - sort them by score
  const players = [
    { id: 1, name: "Karla", score: 6 },
    { id: 2, name: "David", score: 2 },
    { id: 3, name: "Matias", score: 4 },
    { id: 4, name: "Rein", score: 1 },
  ];

  function compareScore(playerA, playerB) {
    return playerB.score - playerA.score;
  }

  const sortedPlayers = [...players].sort(compareScore);

  return (
    <div>
      <h1>I AM A SCOREBOARD</h1>
      {sortedPlayers.map((player) => {
        console.log(player);
        return (
          <Player key={player.id} name={player.name} score={player.score} />
        );
      })}
    </div>
  );
}
