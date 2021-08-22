import { CENTER_ID } from "./const.js";
import { getDOMElement } from "./utils.js";
import { renderEvent } from "./events.js";

export const firstDeck = () => {
  const gameDeck = getDOMElement(CENTER_ID);
  const deckDiv = document.createElement("div");
  deckDiv.classList.add("new-deck");
  deckDiv.addEventListener("click", renderEvent, { once: true });
  gameDeck.appendChild(deckDiv);
};
