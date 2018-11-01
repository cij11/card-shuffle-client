import { buildCard, buildDeck } from '../deck-building.js';

import scenario000 from './scenario-cards/scenario000';
import scenario001 from './scenario-cards/scenario001';
import scenario002 from './scenario-cards/scenario002';
import scenario003 from './scenario-cards/scenario003';

const scenarioCards = [];

scenarioCards.push(scenario000);
scenarioCards.push(scenario001);
scenarioCards.push(scenario002);
scenarioCards.push(scenario003);


export default buildDeck('scenarios', scenarioCards);