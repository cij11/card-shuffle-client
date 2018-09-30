const characterCards = [],
    characterDeck = {
        deckName: 'characters',
    };

const buildCard = (title, text) => {
    return {
        data: {
            title,
            text,
        }
    }
}

const buildDeck = (deckName, cards) => {
    return {
        deckName,
        topCard: cards.pop(),
        cards,
    }
}

characterCards.push(buildCard('card-1', 'text-1'));
characterCards.push(buildCard('card-2', 'text-2'));
characterCards.push(buildCard('card-3', 'text-3'));

export default buildDeck('characters', characterCards);