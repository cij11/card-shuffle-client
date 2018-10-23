// Hard coded decks of cards
import characterDeck from './deck-content/character-deck.js';
import scenarioDeck from './deck-content/scenario-deck.js';
import standardDeck from './deck-content/standard-deck.js';
import scenarioMutatorDeck from './deck-content/scenario-mutator-deck.js';

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

const scenarioMutatorDeckBuilder = () => {
    return _.cloneDeep(scenarioMutatorDeck);
}

export { characterDeckBuilder, scenarioDeckBuilder, standardDeckBuilder, scenarioMutatorDeckBuilder };