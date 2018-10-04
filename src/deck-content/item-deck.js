import { buildCard, buildDeck } from '../deck-building.js';

const itemCards = [];

let i = 0,
maxCards = 60;

for (i = 0; i < maxCards; i++) {
    itemCards.push(buildCard('itemCards-card-' + i, 'itemCards-text-' + i));
}

export default buildDeck('items', itemCards);