
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
    // Incorporate the deckName into the seed, so that decks with different names aren't shuffled in the same
    // order as each other (This prevents, for example, card N in deck A always being in the same position as card
    // M in deck B, although the exact position changes with different shuffles.)
    let combinedSeed = deck.deckName + seed;
    deck.cards = shuffleCards(deck.cards, combinedSeed);
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

// Remove the top card from the deck, provided there is more than one card left.
// Otherwise, return the deck unchanged.
const removeTopCard = (deck) => {
    var afterDeck =  {
        deckName: deck.deckName,
        cards: deck.cards.length > 1 ? deck.cards.slice(0, -1) : deck.cards,
    }
    return afterDeck;
}

// Pass in a deck. Split the deck into that many piles of equal size.
// Return the selectedPile'th pile.
// If the deck does not split evenly, excess cards will be discarded.
const splitCards = (cards, numPiles, selectedPile) => {
    let chunkSize = Math.floor(cards.length / numPiles),
        pile = cards.slice(selectedPile * chunkSize, (selectedPile + 1) * chunkSize);

    console.log(cards);
    console.log("Chunksize: " + chunkSize);
    console.log(pile);

    return pile;
}

const splitDeck = (deck, numPiles, selectedPile) => {
    deck.cards = splitCards(deck.cards, numPiles, selectedPile);

    return deck;
}


export { getCard, shuffleDeck, shuffleCards, removeTopCard, splitDeck };