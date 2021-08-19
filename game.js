import {render} from "./card.js";
import { CENTER_ID } from "./const.js"
import { getDOMElement} from "./utils.js"


export const firstDeck = () => {
    const gameDeck = getDOMElement(CENTER_ID);
    const deckDiv = document.createElement('div')
    deckDiv.classList.add('new-deck');
    deckDiv.addEventListener('click',render);
    gameDeck.appendChild(deckDiv);
}