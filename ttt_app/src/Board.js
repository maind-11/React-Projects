import React, { useState } from "react";
import "./Board.scss";

export default function Board() {
  // let turn = 0;

  const [turn, setTurn] = useState(0);
  const [player, setPlayer] = useState("Player O");

  //set the color of matching box and display winner
  const setWinner = (div1, div2, div3) => {
    document.getElementById("box").style.pointerEvents = "none";

    document.getElementById(div1).style.backgroundColor = "pink";
    document.getElementById(div2).style.backgroundColor = "pink";
    document.getElementById(div3).style.backgroundColor = "pink";
    console.log(player + " wins");
    document.getElementById("game_msg").innerText = player + " wins";
  };

  //checks the condition and calls set winner
  const checkWinner = () => {
    let one = document.getElementById("one").innerText;
    let two = document.getElementById("two").innerText;
    let three = document.getElementById("three").innerText;
    let four = document.getElementById("four").innerText;
    let five = document.getElementById("five").innerText;
    let six = document.getElementById("six").innerText;
    let seven = document.getElementById("seven").innerText;
    let eight = document.getElementById("eight").innerText;
    let nine = document.getElementById("nine").innerText;

    if (one === two && two === three && one !== "") {
      setWinner("one", "two", "three");
    } else if (four === five && five === six && four !== "") {
      setWinner("four", "five", "six");
    } else if (seven === eight && eight === nine && seven !== "") {
      setWinner("seven", "eight", "nine");
    } else if (one === four && four === seven && one !== "") {
      setWinner("one", "four", "seven");
    } else if (two === five && five === eight && two !== "") {
      setWinner("two", "five", "eight");
    } else if (three === six && six === nine && three !== "") {
      setWinner("three", "six", "nine");
    } else if (one === five && five === nine && one !== "") {
      setWinner("one", "five", "nine");
    } else if (three === five && five === seven && three !== "") {
      setWinner("three", "five", "seven");
    }
  };

  //writes the value in one perticular box and calls checkWinner
  const writeValue = (e) => {
    let element = document.getElementById(e.target.id);

    if (turn % 2 === 0) {
      element.innerText = "O";
    } else {
      element.innerText = "X";
    }

    element.style.pointerEvents = "none";
    checkWinner();

    setTurn((turn) => (turn += 1));
    if (turn % 2 == 0) {
      setPlayer("Player X");
    } else {
      setPlayer("Player O");
    }
  };

  return (
    <div>
      <div id="player">{player + " turn"}</div>
      <div id="game_msg"></div>
      <div id="box">
        <div id="row">
          <div id="one" onClick={(e) => writeValue(e)}></div>
          <div id="two" onClick={(e) => writeValue(e)}></div>
          <div id="three" onClick={(e) => writeValue(e)}></div>
        </div>
        <div id="row">
          <div id="four" onClick={(e) => writeValue(e)}></div>
          <div id="five" onClick={(e) => writeValue(e)}></div>
          <div id="six" onClick={(e) => writeValue(e)}></div>
        </div>
        <div id="row">
          <div id="seven" onClick={(e) => writeValue(e)}></div>
          <div id="eight" onClick={(e) => writeValue(e)}></div>
          <div id="nine" onClick={(e) => writeValue(e)}></div>
        </div>
      </div>
      <div id="button_container">
        <button
          type="reset"
          id="reset"
          onClick={() => document.location.reload(true)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
