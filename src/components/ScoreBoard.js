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

  // 1. define our function that is going to change the score
  function incrementScore(playerId) {
    // 6. Does this function get called when you click the + button
    console.log("I WAS DEFINED IN SCOREBOARD");
    // 7. Did we get the id of the player?
    console.log("WHO SHOULD GET A POINT", playerId);
    // 8. Write logic to change the score of a player
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
            // 2. pass our function that can change score to the child
            // component (as a prop, a callback)
            incrementScore={incrementScore}
          />
        );
      })}
    </div>
  );
}
