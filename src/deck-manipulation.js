
const seedrandom = require('seedrandom');
const _ = require('lodash');

// Get the cardNumber'th card from the deck.  
// This operation takes in the full deck of cards, and returns the card which would be drawn
// the cardNumber'th time. So, cardNumber 0 is the top of the freshly shuffled deck
const getCard = (deck, cardNumber, seed) => {
    if (cardNumber >= deck.length) {
        console.log('Requested card "' + cardNumber + '" out of bounds');
        return null;
    }

    var rng = seedrandom(seed);

    // Generate shuffle
    var i = 0,
        availableShufflePositions = [],
        shuffledPositions = [];

    for (i = 0; i < deck.length; i++) {
        availableShufflePositions.push(i);
    }

    for (i = 0; i < deck.length; i++) {
        var nextPos = Math.floor((rng() * availableShufflePositions.length));

        shuffledPositions.push(availableShufflePositions[nextPos]);
        
        // That position is no longer available
        availableShufflePositions.splice(nextPos, 1);
    }

    // Return the card at the cardNumber'th position in the shuffled array
  //  return deck[shuffledPositions[cardNumber]];
  return (deck[shuffledPositions[cardNumber]]);
}

const shuffleDeck = (deck, seed) => {
    deck.cards = shuffleCards(deck.cards, seed);
  //  deck.cards = [{data: {title: 'bah', text: 'humbug'}}];
    return deck;
}

// Shuffle a cards, using a seed if one is provided
// This method is space heavy 
const shuffleCards = (cards, seed) => {
    if (seed) {
        var clonedDeck = _.clone(cards), // Shallow clone. References will be preserved.
            shuffledDeck = [];

        var rng = seedrandom(seed);

        var i = 0;
        for (i = 0; i < cards.length; i++) {
            var nextPos = Math.floor((rng() * clonedDeck.length));
    
            shuffledDeck.push(clonedDeck[nextPos]);
            
            // That position is no longer available
            clonedDeck.splice(nextPos, 1);
        }
        return shuffledDeck;

    } else {
        return _.shuffle(cards);
    }
}

const removeTopCard = (deck) => {
    var afterDeck =  {
        deckName: deck.deckName,
        cards: deck.cards.length > 1 ? deck.cards.slice(0, -1) : deck.cards,
    }
    return afterDeck;
}


export { getCard, shuffleDeck, shuffleCards, removeTopCard };