import { STORE_SEED, DRAW_CARD } from '../actions/actions';
import { combineReducers } from 'redux';

import { constructStandardDeck } from '../deck-library';
import { shuffleDeck } from '../deck-manipulation';

const NUM_DECKS = 2;

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
            return popSelectedDeckNames(decks, action.deckNames);
        default:
            return decks;
    }
}

const popSelectedDeckNames = (decks, deckNames) => {
    var updatedDecks = [];
    decks.forEach(
        (deck) => {
            if(deckNames.includes(deck.deckName)) {
                updatedDecks.push(
                    {
                        deckName: deck.deckName,
                        card: deck.deck.pop(),
                        deck: deck.deck,
                    }
                )
            } else {
                updatedDecks.push(deck);
            }
        }
    );
    return updatedDecks;
}

const initialDecksState = () => {
    var deck,
        card,
        initialDecks = [];

    for (var i = 0; i < NUM_DECKS; i++) {
        deck = shuffleDeck(constructStandardDeck(), 'i');
        card = deck.pop();
        initialDecks.push({
            deckName: "deck-number-" + i,
            card,
            deck,
        });
    }

    return initialDecks;
}

const reducers = combineReducers(
    {
        seed,
        decks,
    }
)

export default reducers;