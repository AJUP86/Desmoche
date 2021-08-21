import { CENTER_ID } from './const.js';
import { clickOnStart, clickToDeal, dealOneCard } from './functionality.js';

export const displayDeck = () => {
  clickOnStart();
};
export const dealCards = () => {
  clickToDeal();
};

export const handleDealClick = () => {
  dealOneCard();
};
