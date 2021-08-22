import {
  clickOnStart,
  clickToDeal,
  dealOneCard,
  render,
} from "./functionality.js";
import { card } from "./init.js";

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
export const mouseDown = (e) => {
  let prevX = e.clientX;
  let prevY = e.clientY;

  const mouseMove = (e) => {
    let newX = prevX - e.clientX;
    let newY = prevY - e.clientY;
    const rect = card.getBoundingClientRect();
    card.style.left = rect.left - newX + "px";
    card.style.top = rect.top - newY + "px";
    prevX = e.clientX;
    prevY = e.clientY;
  };
  window.addEventListener("mousemove", mouseMove);
  const mouseUp = () => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", mouseUp);
  };
  window.addEventListener("mouseup", mouseUp);
};
