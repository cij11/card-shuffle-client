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
        cards,
        topCard: cards.pop(),
    }
}

export { buildCard, buildDeck };