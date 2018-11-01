import { buildCard, buildDeck } from '../deck-building.js';

import scenario000 from './scenario-cards/scenario000';

const scenarioCards = [];

let i = 0,
maxCards = 60;

for (i = 0; i < maxCards; i++) {
    //scenarioCards.push(buildCard('scenarioCards-card-' + i, 'scenarioCards-text-' + i));
    scenarioCards.push(scenario000);
}

export default buildDeck('scenarios', scenarioCards);