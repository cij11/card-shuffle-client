import { STORE_SEED, DRAW_CARD } from '../actions/actions';
import { combineReducers } from 'redux';

import { constructStandardDeck } from '../deck-library';
import { shuffleDeck } from '../deck-manipulation';

function seed (seed = 'abcd', action) {
    switch (action.type) {
        case STORE_SEED:
            return action.seed;
        default:
            return seed;
    }
}

function cards ( cards = initialCardState(), action) {
    switch (action.type) {
        case DRAW_CARD:
            return {
                card: cards.deck.pop(),
                deck: cards.deck,
            }
        default:
            return cards;
    }
}

function initialCardState() {
    var deck = shuffleDeck(constructStandardDeck());
    return {
        card: deck.pop(),
        deck: deck,
    }
}

const reducers = combineReducers(
    {
        seed,
        cards,
    }
)

export default reducers;