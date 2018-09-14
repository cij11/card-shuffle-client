import { STORE_SEED, DRAW_CARD } from '../actions/actions';
import { combineReducers } from 'redux';

import { constructStandardDeck } from '../deck-library';
import { shuffleDeck } from '../deck-manipulation';

const seed = (seed = 'abcd', action) => {
    switch (action.type) {
        case STORE_SEED:
            return action.seed;
        default:
            return seed;
    }
}

const cards = (cards = initialCardState(), action) => {
    switch (action.type) {
        case DRAW_CARD:
            if (cards.deck.length > 0) {
                return {
                    card: cards.deck.pop(),
                    deck: cards.deck,
                }
            } else {
                return cards;
            }

        default:
            return cards;
    }
}

const initialCardState = () => {
    var deck = shuffleDeck(constructStandardDeck(), '2');
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