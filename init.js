import { getNewCardHtml } from "./card.js";
import {
  BTN_DIV_ID,
  CENTER_ID,
  DEAL_DECK_ID,
  FLIPPED_CARS_CONTAINER_ID,
  PAY_BUTTON_ID,
  PLAYER_GAME_CARDS_ID,
  START_BUTTON_ID,
  TAKE_BUTTON_ID,
  TRIO_GAME_ID,
} from "./const.js";
import * as deck from "./deck.js";
import { displayDeck, handleDealClick } from "./events.js";
import { sortedHand } from "./functionality.js";
import { firstDeck } from "./game.js";
import { createDOMElement, getDOMElement } from "./utils.js";

const initializeGame = () => {
  const gameInit = getDOMElement("game-init");
  const startBtn = createDOMElement("button", { id: START_BUTTON_ID });
  startBtn.innerHTML = "START GAME";
  gameInit.appendChild(startBtn);
  startBtn.addEventListener("click", displayDeck);
  firstDeck();
  setupGame();
  getCard();
  sortedHand();
};
const setupGame = () => {
  const newBtn = getDOMElement(CENTER_ID);
  const btnDiv = createDOMElement("div", { id: BTN_DIV_ID });
  newBtn.appendChild(btnDiv);
  const dealBtn = createDOMElement("button", { id: DEAL_DECK_ID });
  dealBtn.innerHTML = "DEAL";
  btnDiv.appendChild(dealBtn);
  dealBtn.addEventListener("click", handleDealClick);
  const takeBtn = createDOMElement("button", { id: TAKE_BUTTON_ID });
  takeBtn.innerHTML = "TAKE";
  btnDiv.appendChild(takeBtn);
  const payBtn = createDOMElement("button", { id: PAY_BUTTON_ID });
  payBtn.innerHTML = "PAY";
  btnDiv.appendChild(payBtn);
};
const getCard = () => {
  const takeButton = getDOMElement(TAKE_BUTTON_ID);
  takeButton.addEventListener("click", () => {
    const newGame = [];
    const takedCard = deck.dealOneCard();
    const currentTakedCard = takedCard.pop();
    newGame.push(currentTakedCard);
    const newGameDiv = getDOMElement(PLAYER_GAME_CARDS_ID);
    const trioGame = createDOMElement("div", { id: TRIO_GAME_ID });
    trioGame.innerHTML = getNewCardHtml(newGame);
    trioGame.classList.add("hola");
    trioGame.style.position = "absolute";
    newGameDiv.appendChild(trioGame);
    const removeCardfromCenter = getDOMElement(FLIPPED_CARS_CONTAINER_ID);
    removeCardfromCenter.removeChild(removeCardfromCenter.lastChild);
  });
};

window.addEventListener("load", initializeGame);
