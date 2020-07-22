import React, { useState } from "react";
import Player from "./Player";

export default function ScoreBoard() {
  // store the state of the players here, so we can:
  // - compare them
  // - sort them by score
  const [players, setPlayers] = useState([
    { id: 1, name: "Karla", score: 6 },
    { id: 2, name: "David", score: 2 },
    { id: 3, name: "Matias", score: 4 },
    { id: 4, name: "Rein", score: 1 },
  ]);

  function compareScore(playerA, playerB) {
    return playerB.score - playerA.score;
  }

  function incrementScore(playerId) {
    console.log("I WAS DEFINED IN SCOREBOARD");
    console.log("WHO SHOULD GET A POINT", playerId);
    // to do later, write logic to give a player a point
  }

  const sortedPlayers = [...players].sort(compareScore);

  return (
    <div>
      <h1>I AM A SCOREBOARD</h1>
      {sortedPlayers.map((player) => {
        console.log(player);
        return (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        );
      })}
    </div>
  );
}
