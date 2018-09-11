const uuidv4 = require('uuid/v4');


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

export { uuidv4, uuidToNumber };