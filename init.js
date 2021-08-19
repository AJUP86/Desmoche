import { START_BUTTON_ID } from './const.js';
import { displayDeck } from './events.js';
import { firstDeck } from './game.js';
import {createDOMElement, getDOMElement} from './utils.js';
const initializeGame = ()=> {
    const gameInit = getDOMElement('game-init');
    const startBtn = createDOMElement('button',{id:START_BUTTON_ID});
    startBtn.innerHTML = 'START GAME';
    gameInit.appendChild(startBtn);
    startBtn.addEventListener('click',displayDeck );
    firstDeck();

}

    window.addEventListener('load', initializeGame);

