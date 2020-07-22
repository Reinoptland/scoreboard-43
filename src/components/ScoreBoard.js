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

  const [sortBy, setSortBy] = useState("score");

  function compareScore(playerA, playerB) {
    return playerB.score - playerA.score;
  }

  // 1. define our function that is going to change the score
  function incrementScore(playerId) {
    // 6. Does this function get called when you click the + button
    // console.log("I WAS DEFINED IN SCOREBOARD");
    // 7. Did we get the id of the player?
    // console.log("WHO SHOULD GET A POINT", playerId);
    // 8. Write logic to change the score of a player
    // playerId, [{}, {}, {}, {}] -> change the score of one of these object

    // 1. find -> we are looking for one thing X -> one object
    // 2. filter X
    // 3. map -> we do something for element, we produce a new Array
    // - go over each player
    // - if their id matches the playerId
    // - change their score by 1
    // console.log("PLAYERS BEFORE", players);
    const updatedPlayers = players.map((player) => {
      if (player.id === playerId) {
        // console.log("GIVE THIS PLAYER A POINT", player.name);
        return {
          id: player.id,
          name: player.name,
          score: player.score + 1,
        };
      } else {
        // not the player we want to give a point to
        return player;
      }
    });

    // console.log("AFTER", updatedPlayers);
    setPlayers(updatedPlayers);
  }

  let sortedPlayers;

  if (sortBy === "score") {
    sortedPlayers = [...players].sort(compareScore);
  } else if (sortBy === "name") {
    // TODO: sort by name
  }

  function handleChange(event) {
    console.log("WHAT IS SELECTED:", event.target.value);
  }

  return (
    <div>
      <h1>I AM A SCOREBOARD</h1>
      <select onChange={handleChange}>
        <option value="score">Sort By Score</option>
        <option value="name">Sort By Name</option>
      </select>
      {sortedPlayers.map((player) => {
        // console.log(player);
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
