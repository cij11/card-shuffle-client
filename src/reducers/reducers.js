import { STORE_SEED, DRAW_CARD, SELECT_PLAYER } from '../actions/actions';
import { combineReducers } from 'redux';

import { scenarioDeckBuilder, characterDeckBuilder, standardDeckBuilder, scenarioMutatorDeckBuilder } from '../deck-library';
import { shuffleDeck, removeTopCard, splitDeck } from '../deck-manipulation';
import { fourLetterDateSeed } from '../four-letter-date-seed';

const seed = (seed = fourLetterDateSeed(), action) => {
    switch (action.type) {
        case STORE_SEED:
            return action.seed;
        default:
            return seed;
    }
}

const decks = (decks = shuffleDecksRandom(initialDecksState()), action) => {
    let newDecks;

    switch (action.type) {
        case DRAW_CARD:
            // Remove the top card from all selected decks
            return dealFromSelectedDeckNames(decks, action.deckNames);
        case SELECT_PLAYER:

            // Shuffle the decks using the provided seed before splitting, so that all players
            // will get the same shuffle.
            // Split the decks into numPlayers piles, and allocate the playerNumber'th deck to this player
            // If all players have the same seed and numPlayers but unique playerNumbers, the decks will
            // be evenly distributed without double ups.

            // Other tricks could be: hard code numPlayers at a reasonable max (6, say, or 10). As cards are shuffled
            // before splitting, all cards are still equally likely to see play. 
            
            // Default the seed based on time, such that any game starting within 15 minutes of each other will have
            // dysjoint card sets, provided they select different player numbers.
            // An algorithm for this would be to take each 15 minute chunk of time as a seed, and add (max Num players) 
            // to each alternate 15 minute chunk (ie, 0 and 30 would be even, 15 and 45 odd). This way, provided all
            // players start within 15 minutes of the first player starting the game and also select a different 
            // player number, they will have dysjoint sets.
            // Consequence: Max deck size becomes TotalNumCards / (max Num Players * 2), ie 10 for 120 cards and
            // max 6 players. Also, even and odd sets become permanently disjoint unless shuffled before the partition,
            // preventing some combinations ever occurring. Could shuffle by 'date with day accuracy' seed to alleviate this, provided games
            // did not start on either side of midnight.
            newDecks = initialDecksState().map(deck => shuffleDeck(deck, action.seed))
                .map(deck => splitDeck(deck, action.numPlayers, action.playerNumber));
            return newDecks;
        default:
            return decks;
    }
}

const playerNumber = (playerNumber = 0, action) => {
    switch(action.type) {
        case SELECT_PLAYER:
            return action.playerNumber;
        default:
            return playerNumber;
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
    initialDecks.push(scenarioDeckBuilder());
    initialDecks.push(standardDeckBuilder());
    initialDecks.push(scenarioMutatorDeckBuilder());

    return initialDecks;
}

// Randomly shuffle decks on initial load. Eg, provide 
// random seed, instead of seed from player setup.
const shuffleDecksRandom = (decks) => {
    let random = Math.random().toString();
    let shuffledDecks = decks.map(deck => shuffleDeck(deck, random));

    shuffledDecks.forEach((deck) => deck.placeCapCard());

    return shuffledDecks;
}

const splitDecks = (decks, numPiles, selectedPile) => {
    return decks.map(deck => splitDeck(deck, numPiles, selectedPile));
}

const reducers = combineReducers(
    {
        seed,
        decks,
        playerNumber,
    }
)



export default reducers;