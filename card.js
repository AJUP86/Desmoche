import { CENTER_ID, COMPUTER_ID, PLAYER_ID } from './const.js';
import { computerHand, playerHand } from './deck.js';
import { dealCards } from './events.js';
import { getDOMElement } from './utils.js';

const createHand = (hand) => {
  let html = '';
  hand.forEach((card) => {
    html += getNewCardHtml(card);
  });
  return html;
};

export const render = () => {
  const computer = getDOMElement(COMPUTER_ID);
  const computerHandContainer = document.createElement('div');
  computerHandContainer.classList.add('computer-hand');
  computerHandContainer.innerHTML = createHand(computerHand);
  computer.appendChild(computerHandContainer);
  const player = getDOMElement(PLAYER_ID);
  const playerHandContainer = document.createElement('div');
  playerHandContainer.classList.add('player-hand');
  playerHandContainer.innerHTML = createHand(playerHand);
  player.appendChild(playerHandContainer);
  const center = document.getElementById('center');
  center.style.height = '220px';
  dealCards();
};

export function getNewCardHtml(card) {
  return `
    <div class='card'>
      <div class='card-row row-top'>
        <div class="card-text">
          <div>${card}</div>
        </div>
        <div class="card-text">
          <div>${card}</div>
        </div>
      </div>
      <div class='card-row row-bottom'>
        <div class="card-text">
          <div>${card}</div>
        </div>
        <div class="card-text">
          <div>${card}</div>
        </div>
      </div>
    </div>`;
}
