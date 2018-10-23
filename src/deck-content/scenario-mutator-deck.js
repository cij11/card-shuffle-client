import { buildCard, buildDeck } from '../deck-building.js';

const scenarioMutatorCards = [];

let i = 0,
maxCards = 60;

for (i = 0; i < maxCards; i++) {
    scenarioMutatorCards.push(buildCard(' scenarioMutatorCards-card-' + i, 'scenarioMutatorCards-text-' + i));
}

export default buildDeck('scenarioMutators', scenarioMutatorCards);