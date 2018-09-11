
const seedrandom = require('seedrandom');

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
  return deck[shuffledPositions[cardNumber]];
}

export { getCard };