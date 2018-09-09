const uuidv4 = require('uuid/v4');
const seedrandom = require('seedrandom');

const removeDashes = (uuid) => {
    return uuid.replace(/-/g, '');
}

const hexStringToNumber = (hexString) => {
    return parseInt(hexString, 16);
}

const uuidToNumber = (uuid) => {
    var noDashes = removeDashes(uuid),
    parsedNumber = hexStringToNumber(noDashes);

    return parsedNumber;
}

const seededRNG = (seed) => {
    return seedrandom(seed);
}

export { uuidv4, uuidToNumber, seededRNG };