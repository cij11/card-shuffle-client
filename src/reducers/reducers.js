import { STORE_SEED, DRAW_CARD } from '../actions/actions';
import { combineReducers } from 'redux';

import { roomDeck, characterDeck, standardDeck, itemDeck } from '../deck-library';
import { shuffleDeck, removeTopCard } from '../deck-manipulation';

const NUM_DECKS = 1;

const seed = (seed = 'abcd', action) => {
    switch (action.type) {
        case STORE_SEED:
            return action.seed;
        default:
            return seed;
    }
}

const decks = (decks = initialDecksState(), action) => {
    switch (action.type) {
        case DRAW_CARD:
            return dealFromSelectedDeckNames(decks, action.deckNames);
        default:
            return decks;
    }
}

const dealFromSelectedDeckNames = (decks, deckNames) => {
    var updatedDecks = [];
    decks.forEach(
        (deck) => {
            if(deckNames.includes(deck.deckName)) {
                updatedDecks.push(removeTopCard(deck) );
            } else {
                updatedDecks.push(deck);
            }
        }
    );
    return updatedDecks;
}

const initialDecksState = () => {
    var initialDecks = [];

    initialDecks.push(characterDeck);
    initialDecks.push(roomDeck);
    initialDecks.push(standardDeck);
    initialDecks.push(itemDeck);

    return initialDecks.map(deck => shuffleDeck(deck));
}

const reducers = combineReducers(
    {
        seed,
        decks,
    }
)

export default reducers;