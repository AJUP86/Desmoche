const SUITS = ['♥', '♦', '♠', '♣'];
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const deck = ()=> {
 const newDeck = [];
 for(let i = 0; i < SUITS.length; i++) {
     for(let j = 0; j < RANKS.length; j++) {
        newDeck.push(RANKS[j]+ SUITS[i]);
    }
 }
 return newDeck;
}

const shuffle = (deck) => {
for(let k = 0; k < 52; k++){
    let tempCard = deck[k];
    let randomIndex = Math.floor(Math.random() * 52);
    deck[k] = deck[randomIndex];
    deck[randomIndex] = tempCard;
}
}
const shuffleDeck = () => {
    const orderedDeck = deck();
    shuffle(orderedDeck);
return orderedDeck;
}
export const freshDeck = shuffleDeck();
export const array = []
for(let i = 0; i < freshDeck.length; i++){
        array.push(freshDeck[i].split(''));
}

export const computerHand = array.splice(0,9);
export const playerHand = array.splice(0,9);
export const newCard = array.pop()
export const gameDeck = [];
gameDeck.unshift(newCard);
console.log(newCard);
console.log(gameDeck);