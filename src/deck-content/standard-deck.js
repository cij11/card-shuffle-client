import { buildCard, buildDeck } from '../deck-building.js';

const constructStandardCards = () => {
    var i, j,
    cards = [],
    card = {};

    for (i = 0; i < 4; i++) {
        for (j = 0; j < 13; j++ ) {
            card = buildCard("Suit: " + i, "Value: " + j);
            cards.push(card);
        }
    }
    return cards;
};

export default buildDeck('standard-deck', constructStandardCards());