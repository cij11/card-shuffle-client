import { STORE_SEED, DRAW_CARD } from '../actions/actions';
import { combineReducers } from 'redux';

import { constructStandardDeck, constructCharacterDeck } from '../deck-library';
import { shuffleDeck } from '../deck-manipulation';

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
                        topCard: deck.cards.pop() || deck.topCard, //If the deck is empty, stay on the last card
                        cards: deck.cards,
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
    var cards,
        characterDeck,
        topCard,
        initialDecks = [];

    for (var i = 0; i < NUM_DECKS; i++) {
        cards = shuffleDeck(constructStandardDeck(), "seed" + i);
        topCard = cards.pop();
        initialDecks.push({
            deckName: "deck-number-" + i,
            topCard,
            cards,
        });
    }

    characterDeck = constructCharacterDeck();


    initialDecks.push(characterDeck);

    return initialDecks;
}

const reducers = combineReducers(
    {
        seed,
        decks,
    }
)

export default reducers;