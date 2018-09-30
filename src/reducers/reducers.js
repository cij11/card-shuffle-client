import { STORE_SEED, DRAW_CARD, SELECT_PLAYER } from '../actions/actions';
import { combineReducers } from 'redux';

import { roomDeckBuilder, characterDeckBuilder, standardDeckBuilder, itemDeckBuilder } from '../deck-library';
import { shuffleDeck, removeTopCard, splitDeck } from '../deck-manipulation';

const seed = (seed = 'abcd', action) => {
    switch (action.type) {
        case STORE_SEED:
            return action.seed;
        default:
            return seed;
    }
}

const decks = (decks = shuffleDecks(initialDecksState()), action) => {
    switch (action.type) {
        case DRAW_CARD:
            return dealFromSelectedDeckNames(decks, action.deckNames);
        case SELECT_PLAYER:
            return splitDecks(initialDecksState(), 2, action.playerNumber);
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

    initialDecks.push(characterDeckBuilder());
    initialDecks.push(roomDeckBuilder());
    initialDecks.push(standardDeckBuilder());
    initialDecks.push(itemDeckBuilder());

    return initialDecks;
}

const shuffleDecks = (decks) => {
    return decks.map(deck => shuffleDeck(deck));
}

const splitDecks = (decks, numPiles, selectedPile) => {
    return decks.map(deck => splitDeck(deck, numPiles, selectedPile));
}

const reducers = combineReducers(
    {
        seed,
        decks,
    }
)

export default reducers;