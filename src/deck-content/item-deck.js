import { buildCard, buildDeck } from '../deck-building.js';

const itemCards = [];

itemCards.push(buildCard('Shotgun', ''));
itemCards.push(buildCard('Umbrella', ''));
itemCards.push(buildCard('The perfect item*', "Character's choice"));

export default buildDeck('items', itemCards);