import { render} from "./card.js";
import { CENTER_ID, DEAL_DECK_ID } from "./const.js"
import {getDOMElement} from "./utils.js"

export let deckCount = 52
export let computerGame = 0 
export let playerGame = 0 


export const firstDeck = () => {
    const gameDeck = getDOMElement(CENTER_ID);
    const deckDiv = document.createElement('div')
    deckDiv.classList.add('new-deck');
    deckDiv.addEventListener('click',render, {once : true});
    gameDeck.appendChild(deckDiv);
}
export const dealNewCard = () => {
    const flippedCard = getDOMElement(DEAL_DECK_ID)
    flippedCard.addEventListener('click', ()=>{console.log('ahora si')})
}
