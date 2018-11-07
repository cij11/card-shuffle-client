const buildCard = (title, text) => {
    return {
        data: {
            title,
            text,
        }
    }
}

const buildDeck = (deckName, cards, capCard) => {
    return {
        deckName,
        cards,
        capCard, // If provided, this will be the card on the top of the deck after shuffling
        placeCapCard: function() {
            if (this.capCard) {
                this.cards.push(this.capCard);
            }
        }
    }
}

export { buildCard, buildDeck };