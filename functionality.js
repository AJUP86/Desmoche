import {
  DEAL_DECK_ID,
  START_BUTTON_ID,
  FLIPPED_CARDS_ID,
  COMPUTER_ID,
  PLAYER_ID,
} from "./const.js";
import { getDOMElement } from "./utils.js";
import { createHand, getNewCardHtml } from "./card.js";
import * as deck from "./deck.js";
import { dealCards } from "./events.js";

export const clickOnStart = () => {
  const displayGame = document.getElementById("center");
  displayGame.style.visibility = "visible";
  const btn = getDOMElement(START_BUTTON_ID);
  btn.style.visibility = "hidden";
};
export const clickToDeal = () => {
  const beforeDeal = document.getElementById(DEAL_DECK_ID);
  beforeDeal.style.visibility = "visible";
};

export const dealOneCard = () => {
  const flippedCardsDiv = getDOMElement(FLIPPED_CARDS_ID);
  const newFlippedCard = document.createElement("div");
  newFlippedCard.classList.add("new-flipped-card");
  const flippedCards = deck.dealOneCard();
  newFlippedCard.innerHTML = getNewCardHtml(flippedCards[0]);
  flippedCardsDiv.appendChild(newFlippedCard);
  const mouseDown = (e) => {
    let prevX = e.clientX;
    let prevY = e.clientY;

    const mouseMove = (e) => {
      let newX = prevX - e.clientX;
      let newY = prevY - e.clientY;
      const rect = flippedCardsDiv.getBoundingClientRect();
      flippedCardsDiv.style.left = rect.left - newX + "px";
      flippedCardsDiv.style.top = rect.top - newY + "px";
      prevX = e.clientX;
      prevY = e.clientY;
    };
    window.addEventListener("mousemove", mouseMove);
    const mouseUp = () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };
    window.addEventListener("mouseup", mouseUp);
  };
  flippedCardsDiv.addEventListener("mousedown", mouseDown);
};

export const render = () => {
  const computer = getDOMElement(COMPUTER_ID);
  const computerHandContainer = document.createElement("div");
  computerHandContainer.classList.add("computer-hand");
  computerHandContainer.innerHTML = createHand(deck.computerHand);
  computer.appendChild(computerHandContainer);
  const player = getDOMElement(PLAYER_ID);
  const playerHandContainer = document.createElement("div");
  playerHandContainer.classList.add("player-hand");
  playerHandContainer.innerHTML = createHand(deck.playerHand);
  player.appendChild(playerHandContainer);
  const center = document.getElementById("center");
  center.style.height = "220px";
  dealCards();
};
