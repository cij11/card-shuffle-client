import { buildCard, buildDeck } from '../deck-building.js';

const roomCards = [];

let i = 0,
maxCards = 60;

for (i = 0; i < maxCards; i++) {
    roomCards.push(buildCard('roomCards-card-' + i, 'roomCards-text-' + i));
}

export default buildDeck('rooms', roomCards);