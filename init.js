import {
  CENTER_ID,
  DEAL_DECK_ID,
  DRAG_CARD_ID,
  FLIPPED_CARDS_ID,
  START_BUTTON_ID,
} from "./const.js";
import { displayDeck, handleDealClick, mouseDown } from "./events.js";
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
  dragCards();
};
const setupGame = () => {
  const newBtn = getDOMElement(CENTER_ID);
  const dealBtn = createDOMElement("button", { id: DEAL_DECK_ID });
  dealBtn.innerHTML = "DEAL";
  newBtn.appendChild(dealBtn);
  dealBtn.addEventListener("click", handleDealClick);
};
export const card = getDOMElement(FLIPPED_CARDS_ID);
const dragCards = () => {
  card.addEventListener("mousedown", mouseDown);
};
window.addEventListener("load", initializeGame);
