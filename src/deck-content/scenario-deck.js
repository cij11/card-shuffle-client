import { buildCard, buildDeck } from '../deck-building.js';

const scenarioCards = [];

let i = 0,
maxCards = 60;

for (i = 0; i < maxCards; i++) {
    scenarioCards.push(buildCard('scenarioCards-card-' + i, 'vCards-text-' + i));
}

export default buildDeck('scenarios', scenarioCards);