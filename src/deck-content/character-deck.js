import { buildCard, buildDeck } from '../deck-building.js';

const characterCards = [];

characterCards.push(buildCard('card-1', 'text-1'));
characterCards.push(buildCard('card-2', 'text-2'));
characterCards.push(buildCard('card-3', 'text-3'));
characterCards.push(buildCard('card-4', 'text-4'));
characterCards.push(buildCard('card-5', 'text-5'));
characterCards.push(buildCard('card-6', 'text-6'));
characterCards.push(buildCard('card-7', 'text-7'));
characterCards.push(buildCard('card-8', 'text-8'));
characterCards.push(buildCard('card-9', 'text-9'));

export default buildDeck('characters', characterCards);