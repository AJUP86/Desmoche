import { CENTER_ID, DEAL_DECK_ID, START_BUTTON_ID } from './const.js';
import { displayDeck, handleDealClick } from './events.js';
import { firstDeck } from './game.js';
import { createDOMElement, getDOMElement } from './utils.js';

const initializeGame = () => {
  const gameInit = getDOMElement('game-init');
  const startBtn = createDOMElement('button', { id: START_BUTTON_ID });
  startBtn.innerHTML = 'START GAME';
  gameInit.appendChild(startBtn);
  startBtn.addEventListener('click', displayDeck);
  firstDeck();
  setupGame();
};
const setupGame = () => {
  const newBtn = getDOMElement(CENTER_ID);
  const dealBtn = createDOMElement('button', { id: DEAL_DECK_ID });
  dealBtn.innerHTML = 'DEAL';
  newBtn.appendChild(dealBtn);
  dealBtn.addEventListener('click', handleDealClick);
};

window.addEventListener('load', initializeGame);
