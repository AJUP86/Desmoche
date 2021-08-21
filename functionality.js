import {DEAL_DECK_ID, START_BUTTON_ID } from "./const.js";
import {getDOMElement } from "./utils.js";

export const clickOnStart = () => {
    const displayGame = document.getElementById('center')
    displayGame.style.visibility = 'visible';
    const btn = getDOMElement(START_BUTTON_ID)
    btn.style.visibility ='hidden';
}
export const clickToDeal = () => {
    const beforeDeal = document.getElementById(DEAL_DECK_ID);
    beforeDeal.style.visibility ='visible'
}
