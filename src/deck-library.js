// Hard coded decks of cards
import characterDeck from './deck-content/character-deck.js';

// a deck has a deckName, a topCard, and a cards array.
// Each card has a data object.

const constructStandardDeck = () => {
    var i, j,
    standardDeck = [],
    card = {};

    for (i = 0; i < 4; i++) {
        for (j = 0; j < 13; j++ ) {
            card = {
                data : {
                    title: "Suit: " + i,
                    text: "Value: " + j,
                }
            }
            standardDeck.push(card);
        }
    }
    console.log(standardDeck);
    return standardDeck;
};

const constructCharacterDeck = () => {
    return characterDeck;
}

export { constructStandardDeck, constructCharacterDeck };