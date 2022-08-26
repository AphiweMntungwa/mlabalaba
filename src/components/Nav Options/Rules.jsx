import React from "react";

function Rules({ navItem }) {
  const dynamicItemStyle =
    navItem === "rules" ? { display: "block" } : { display: "none" };

  return (
    <section style={dynamicItemStyle}>
      <h2>Gameplay</h2>
      <p>
        <i>Morabaraba</i> is accessible and easy to learn, and games can be
        played quickly, but the strategic and tactical aspects of the game run
        deep. While it may be played on specially produced boards (or simulated
        by computer software as a video game ), it is simple enough that a board
        can easily be scratched on a stone or into sand, with coins or pebbles
        (or whatever comes to hand) used as the pieces. The description below is
        compatible with Mind Sports South Africa's "generally accepted rules".
      </p>
      <ol>
        <li>Placing the cows</li>
        <li>Moving the cows</li>
        <li>Flying the cows</li>
      </ol>
      <h3>Placing the cows</h3>
      <ul>
        <li>
          The board is empty when the game begins. Each player has 12 pieces,
          known as "cows"; one player has light cows and the other has dark cows
        </li>
        <li>The player with the dark cows moves first</li>
        <li>
          Each turn consists of placing a cow on an empty intersection on the
          board
        </li>
        <li>
          The aim is to create a "mill": a row of three cows on any line drawn
          on the board
        </li>
        <li>
          If a player forms a mill, he or she may remove or "shoot" one of the
          opponent's cows. The shot cow is removed from the board and not placed
          again. A cow in a mill may not be shot unless all of the opponent's
          cows are in mills, in which case any cow may be shot.
        </li>
        <li>
          Even if a move creates more than one mill, only one cow can be shot in
          a single move
        </li>
      </ul>
      <h3>Moving the cows</h3>
      <ul>
        <li>
          After all the cows have been placed, each turn consists of moving a
          cow to an empty adjacent intersection
        </li>
        <li>
          As before, completing a mill allows a player to shoot one of the
          opponent's cows. Again, this must be a cow which is not in a mill,
          unless all of the opponent's cows are in mills.
        </li>
        <li>Players are allowed to "break" their own mills</li>
        <li>
          A mill may be broken and remade repeatedly by shuffling cows back and
          forth. Each time the mill is remade, one of the opponent's cows is
          shot. Of course, by breaking the mill the player exposes the cows
          which were in a mill to the risk of being shot by the opponent on his
          or her next turn.
        </li>
        <li>
          In the "generally accepted rules" published by Mind Sports South
          Africa, a mill which is broken to form a new mill can not be formed
          again on the next move.
        </li>
        <li>
          In some instances (in a competitive game) a chess rule "touch is a
          move" apply for time management. But this rule will be applied
          depending on the opinion of players.
        </li>
      </ul>
      <h3>Flying the cows</h3>
      <ul>
        <li>
          When a player has only three cows remaining, desperate measures are
          called for. This player's cows are allowed to "fly" to any empty
          intersection, not just adjacent ones.
        </li>
        <li>
          If one player has three cows and the other player has more than three
          cows, only the player with three cows is allowed to fly
        </li>
      </ul>
      <h3>Finishing the game</h3>
      <ul>
        <li>
          A win occurs if one opponent has just two cows or if there are no
          moves.
        </li>
        <li>
          If either player has only three cows and neither player shoots a cow
          within ten moves, the game is drawn
        </li>
        <li>If one person cheats, then the other one wins by default</li>
        <li>
          If one player picks up all cows while the play is still on, the player
          whose cows are on the board wins by default.
        </li>
        <li>
          If a player plays twice before the other player, the player who did
          not play wins by default.
        </li>
      </ul>
    </section>
  );
}

export default Rules;
