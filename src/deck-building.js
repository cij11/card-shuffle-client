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
    }
}

export { buildCard, buildDeck };