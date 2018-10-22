// Hard coded decks of cards
import characterDeck from './deck-content/character-deck.js';
import scenarioDeck from './deck-content/scenario-deck.js';
import standardDeck from './deck-content/standard-deck.js';
import itemDeck from './deck-content/item-deck.js';

const _ = require('lodash');

// a deck has a deckName, a topCard, and a cards array.
// Each card has a data object.

const characterDeckBuilder = () => {
    return _.cloneDeep(characterDeck);
}

const scenarioDeckBuilder = () => {
    return _.cloneDeep(scenarioDeck);
}

const standardDeckBuilder = () => {
    return _.cloneDeep(standardDeck);
}

const itemDeckBuilder = () => {
    return _.cloneDeep(itemDeck);
}

export { characterDeckBuilder, scenarioDeckBuilder, standardDeckBuilder, itemDeckBuilder };