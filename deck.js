const SUITS = ["♥", "♦", "♠", "♣"];
const RANKS = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const createDeck = () => {
  const newDeck = [];
  for (let i = 0; i < SUITS.length; i++) {
    for (let j = 0; j < RANKS.length; j++) {
      newDeck.push([RANKS[j], SUITS[i]]);
    }
  }
  return newDeck;
};

const shuffle = (deck) => {
  for (let k = 0; k < deck.length; k++) {
    let tempCard = deck[k];
    let randomIndex = Math.floor(Math.random() * deck.length);
    deck[k] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
};

const shuffleDeck = () => {
  const deck = createDeck();
  shuffle(deck);
  return deck;
};

export const freshDeck = shuffleDeck();
export const computerHand = freshDeck.splice(0, 9);
export const playerHand = freshDeck.splice(0, 9);

const flippedCards = [];

export const dealOneCard = () => {
  if (freshDeck.length === 0) {
    console.error("cannot deal card: deck is empty");
    return;
  }
  const card = freshDeck.pop();
  flippedCards.unshift(card);
  return flippedCards;
};
