import { STORE_SEED } from '../actions/actions';
import { combineReducers } from 'redux';

function seed (seed = 'abcd', action) {
    switch (action.type) {
        case STORE_SEED:
            return action.seed;
        default:
            return seed;
    }
}

const reducers = combineReducers(
    {
        seed,
    }
)

export default reducers;