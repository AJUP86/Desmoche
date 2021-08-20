import {CENTER_ID, COMPUTER_ID, PLAYER_ID } from './const.js';
import { array, computerHand, playerHand } from './deck.js';
import { dealCards } from './events.js';
import {getDOMElement} from './utils.js';
  function getCardHtml(index) {
    return `
    <div class='card'>
      <div class='card-row row-top'>
        <div class="card-text">
          <div>${index[0]}</div>
        </div>
        <div class="card-text">
          <div>${index[0]}</div>
        </div>
      </div>
      <div class='card-row row-bottom'>
        <div class="card-text">
          <div>${index[0]}</div>
        </div>
        <div class="card-text">
          <div>${index[0]}</div>
        </div>
      </div>
    </div>
    <div class='card'>
      <div class='card-row row-top'>
        <div class="card-text">
          <div>${index[1]}</div>
        </div>
        <div class="card-text">
          <div>${index[1]}</div>
        </div>
      </div>
      <div class='card-row row-bottom'>
        <div class="card-text">
          <div>${index[1]}</div>
        </div>
        <div class="card-text">
          <div>${index[1]}</div>
        </div>
      </div>
    </div>
    <div class='card'>
      <div class='card-row row-top'>
        <div class="card-text">
          <div>${index[2]}</div>
        </div>
        <div class="card-text">
          <div>${index[2]}</div>
        </div>
      </div>
      <div class='card-row row-bottom'>
        <div class="card-text">
          <div>${index[2]}</div>
        </div>
        <div class="card-text">
          <div>${index[2]}</div>
        </div>
      </div>
    </div>
    <div class='card'>
      <div class='card-row row-top'>
        <div class="card-text">
          <div>${index[3]}</div>
        </div>
        <div class="card-text">
          <div>${index[3]}</div>
        </div>
      </div>
      <div class='card-row row-bottom'>
        <div class="card-text">
          <div>${index[3]}</div>
        </div>
        <div class="card-text">
          <div>${index[3]}</div>
        </div>
      </div>
    </div>
    <div class='card'>
      <div class='card-row row-top'>
        <div class="card-text">
          <div>${index[4]}</div>
        </div>
        <div class="card-text">
          <div>${index[4]}</div>
        </div>
      </div>
      <div class='card-row row-bottom'>
        <div class="card-text">
          <div>${index[4]}</div>
        </div>
        <div class="card-text">
          <div>${index[4]}</div>
        </div>
      </div>
    </div>
    <div class='card'>
      <div class='card-row row-top'>
        <div class="card-text">
          <div>${index[5]}</div>
        </div>
        <div class="card-text">
          <div>${index[5]}</div>
        </div>
      </div>
      <div class='card-row row-bottom'>
        <div class="card-text">
          <div>${index[5]}</div>
        </div>
        <div class="card-text">
          <div>${index[5]}</div>
        </div>
      </div>
    </div>
    <div class='card'>
      <div class='card-row row-top'>
        <div class="card-text">
          <div>${index[6]}</div>
        </div>
        <div class="card-text">
          <div>${index[6]}</div>
        </div>
      </div>
      <div class='card-row row-bottom'>
        <div class="card-text">
          <div>${index[6]}</div>
        </div>
        <div class="card-text">
          <div>${index[6]}</div>
        </div>
      </div>
    </div>
    <div class='card'>
      <div class='card-row row-top'>
        <div class="card-text">
          <div>${index[7]}</div>
        </div>
        <div class="card-text">
          <div>${index[7]}</div>
        </div>
      </div>
      <div class='card-row row-bottom'>
        <div class="card-text">
          <div>${index[7]}</div>
        </div>
        <div class="card-text">
          <div>${index[7]}</div>
        </div>
      </div>
    </div>
    <div class='card'>
      <div class='card-row row-top'>
        <div class="card-text">
          <div>${index[8]}</div>
        </div>
        <div class="card-text">
          <div>${index[8]}</div>
        </div>
      </div>
      <div class='card-row row-bottom'>
        <div class="card-text">
          <div>${index[8]}</div>
        </div>
        <div class="card-text">
          <div>${index[8]}</div>
        </div>
      </div>
    </div>
      `;
  }
  export const render = () => {
    const computer = getDOMElement(COMPUTER_ID);
    const computerHandContainer = document.createElement('div');
    computerHandContainer.classList.add('computer-hand');
    computerHandContainer.innerHTML = getCardHtml(computerHand);
    computer.appendChild(computerHandContainer);
    const player = getDOMElement(PLAYER_ID);
    const playerHandContainer = document.createElement('div');
    playerHandContainer.classList.add('player-hand');
    playerHandContainer.innerHTML = getCardHtml(playerHand);
    player.appendChild(playerHandContainer);
    const center = document.getElementById('center')
    center.style.height ='220px'
    dealCards()
  }
  
  function getNewCardHtml(index) {
    return `
    <div class='card'>
      <div class='card-row row-top'>
        <div class="card-text">
          <div>${index[0]}</div>
        </div>
        <div class="card-text">
          <div>${index[0]}</div>
        </div>
      </div>
      <div class='card-row row-bottom'>
        <div class="card-text">
          <div>${index[0]}</div>
        </div>
        <div class="card-text">
          <div>${index[0]}</div>
        </div>
      </div>
    </div>`
  }
  export const dealOneCard = ()=> {
      const center = getDOMElement(CENTER_ID);
      const gameCard = document.createElement('div');
      gameCard.innerHTML = getNewCardHtml(array)
      center.appendChild(gameCard);

  } 