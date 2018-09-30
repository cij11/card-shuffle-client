import { buildCard, buildDeck } from '../deck-building.js';

const roomCards = [];

roomCards.push(buildCard('card-1', 'text-1'));
roomCards.push(buildCard('card-2', 'text-2'));
roomCards.push(buildCard('card-3', 'text-3'));

export default buildDeck('rooms', roomCards);