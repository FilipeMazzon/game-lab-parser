const fs = require('fs');
const utils = require('util');

const readFile = utils.promisify(fs.readFile);

const getRoughFile = async (pathFile) => {
    const convertBufferTo = 'utf8';
    return readFile(pathFile, convertBufferTo);
};

module.exports = {
    getRoughFile
};
