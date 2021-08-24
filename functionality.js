import {
  DEAL_DECK_ID,
  START_BUTTON_ID,
  FLIPPED_CARDS_ID,
  COMPUTER_ID,
  PLAYER_ID,
  TAKE_BUTTON_ID,
  PAY_BUTTON_ID,
  CENTER_ID,
  FLIPPED_CARS_CONTAINER_ID,
  PLAYER_GAME_CARDS_ID,
  PLAYER_HAND_DIV_ID,
  SORTED_BTN_ID,
} from "./const.js";
import { createDOMElement, getDOMElement } from "./utils.js";
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
  const takeCardBtn = getDOMElement(TAKE_BUTTON_ID);
  takeCardBtn.style.visibility = "visible";
  const payCardBtn = getDOMElement(PAY_BUTTON_ID);
  payCardBtn.style.visibility = "visible";
};
const centerDiv = getDOMElement(CENTER_ID);
const flippedCardsContainer = createDOMElement("div", {
  id: FLIPPED_CARS_CONTAINER_ID,
});
centerDiv.appendChild(flippedCardsContainer);
export const dealOneCard = () => {
  const getFlippedCardContainer = getDOMElement(FLIPPED_CARS_CONTAINER_ID);
  const flippedCardsDiv = createDOMElement("div", { id: FLIPPED_CARDS_ID });
  const flippedCards = deck.dealOneCard();
  flippedCardsDiv.innerHTML = getNewCardHtml(flippedCards[0]);
  getFlippedCardContainer.appendChild(flippedCardsDiv);
};

export const sortedHand = () => {
  const sorted = getDOMElement(PLAYER_ID);
  const sortedBtn = createDOMElement("button", { id: SORTED_BTN_ID });
  sortedBtn.innerHTML = "SORT";
  sorted.appendChild(sortedBtn);
  sortedBtn.addEventListener("click", () => {
    createHand(deck.playerHand.sort());
  });
};
export const render = () => {
  const computer = getDOMElement(COMPUTER_ID);
  const computerHandContainer = document.createElement("div");
  computerHandContainer.classList.add("computer-hand");
  computerHandContainer.innerHTML = createHand(deck.computerHand);
  computer.appendChild(computerHandContainer);
  computerHandContainer.style.visibility = "hidden";
  const computerGameContainer = document.createElement("div");
  computerGameContainer.classList.add("computer-game");
  computerGameContainer.innerHTML = "Game";
  computer.appendChild(computerGameContainer);
  computerGameContainer.style.width = "96%";
  computerGameContainer.style.height = "210px";
  computerGameContainer.style.margin = "2%";
  computerGameContainer.style.backgroundColor = "darkolivegreen";
  computerGameContainer.style.border = "3px solid black";
  computerGameContainer.style.borderRadius = "1em";
  const player = getDOMElement(PLAYER_ID);
  const playerGameContainer = document.createElement("div");
  playerGameContainer.classList.add("player-game");
  playerGameContainer.setAttribute("id", "player-game-cards");
  playerGameContainer.innerHTML = "Game";
  player.appendChild(playerGameContainer);
  playerGameContainer.style.width = "96%";
  playerGameContainer.style.height = "210px";
  playerGameContainer.style.margin = "2%";
  playerGameContainer.style.backgroundColor = "darkolivegreen";
  playerGameContainer.style.border = "3px solid black";
  playerGameContainer.style.borderRadius = "1em";
  const playerHandContainer = document.createElement("div");
  playerHandContainer.classList.add("player-hand");
  playerHandContainer.setAttribute("id", "player-hand-div");
  playerHandContainer.innerHTML = createHand(deck.playerHand);
  player.appendChild(playerHandContainer);
  const center = document.getElementById("center");
  center.style.height = "220px";
  dealCards();
};
