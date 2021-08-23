import {
  clickOnStart,
  clickToDeal,
  dealOneCard,
  render,
} from "./functionality.js";

export const displayDeck = () => {
  clickOnStart();
};
export const dealCards = () => {
  clickToDeal();
};

export const handleDealClick = () => {
  dealOneCard();
};
export const renderEvent = () => {
  render();
};
