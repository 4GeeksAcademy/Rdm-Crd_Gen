/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let switchCardButton = document.querySelector("#button");
  switchCardButton.addEventListener("click", function() {
    let suits = ["♦", "♥", "♠", "♣"];
    let numbers = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "K",
      "Q",
      "J",
      "A"
    ];

    let randomSuit = Math.floor(Math.random() * suits.length);
    let randomNumber = Math.floor(Math.random() * numbers.length);

    function colorSuits(icon) {
      if (icon === "♠" || icon === "♣") {
        return "black";
      } else {
        return "red";
      }
    }
    let cardHTML = `
    <span id="top-suit" class="simbolo ${colorSuits(suits[randomSuit])}">${
      suits[randomSuit]
    }</span>
      <span class="number">
        ${numbers[randomNumber]}
    </span>
    <span id="bottom-suit" class="simbolo ${colorSuits(suits[randomSuit])}">${
      suits[randomSuit]
    }</span`;

    let cardContainer = document.querySelector("#card");
    cardContainer.innerHTML = cardHTML;
  });
};
