import { buildDeck } from '../deck-building.js';

import character000 from './character-cards/character000.js';
import character001 from './character-cards/character001.js';
import character002 from './character-cards/character002.js';
import character003 from './character-cards/character003.js';

const characterCards = [];
let character;

character = {
    data: {
        title: "BlankSlate",
        paragraphs: [
            "CollaborationBetween",
            "You",
            "CurrentDM",
            "AndTheGroup",
        ],
        rules: [
            "YouDecideOne",
            "CurrentDMDecidesOne",
            "GroupDecidesOne",
        ],
        items: [
            "YouDecideOne",
            "CurrentDMDecidesOne",
            "GroupDecidesOne",
        ]
    }
};
characterCards.push(character);


characterCards.push(character000);
characterCards.push(character001);
characterCards.push(character002);
characterCards.push(character003);
characterCards.push(character003);
characterCards.push(character003);
characterCards.push(character003);
characterCards.push(character003);


export default buildDeck('characters', characterCards);