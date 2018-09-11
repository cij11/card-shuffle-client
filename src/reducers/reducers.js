import { STORE_SEED, DRAW_CARD } from '../actions/actions';
import { combineReducers } from 'redux';

import { constructStandardDeck } from '../deck-library';
import { getCard } from '../deck-manipulation';

const standardDeck = constructStandardDeck();

function seed (seed = 'abcd', action) {
    switch (action.type) {
        case STORE_SEED:
            return action.seed;
        default:
            return seed;
    }
}

function card (card = getCard(standardDeck, 0, '1'), action) {
    switch (action.type) {
        case DRAW_CARD:
            return getCard(standardDeck, action.cardNum, '1');
        default:
            return card
    }
}

const reducers = combineReducers(
    {
        seed,
        card,
    }
)

export default reducers;