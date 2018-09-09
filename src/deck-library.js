// Hard coded decks of cards

const constructStandardDeck = () => {
    var i, j,
    standardDeck = [],
    card = {};

    for (i = 0; i < 4; i++) {
        for (j = 0; j < 13; j++ ) {
            card = {
                data : {
                    suit: i,
                    value: j,
                }
            }
            standardDeck.push(card);
        }
    }
    return standardDeck;
};

export { constructStandardDeck };