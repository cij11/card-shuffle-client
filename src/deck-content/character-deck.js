import { buildCard, buildDeck } from '../deck-building.js';

const characterCards = [];

let i = 0,
maxCards = 60;

for (i = 0; i < maxCards; i++) {
    characterCards.push(buildCard('character-card-' + i, 'character-text-' + i));
}

export default buildDeck('characters', characterCards);