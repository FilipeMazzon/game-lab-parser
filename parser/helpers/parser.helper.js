require('parser/prototypes/array.prototype');
const getAllAndIgnoreCaseFlag = 'gi';
const getInitialGameArray = (roughFile) => {
    const pattern = 'initGame';

    return roughFile
        .splitWithRegex(pattern, getAllAndIgnoreCaseFlag)
        .splice(0); //ignore first element because its before the first initial game.
};

const cleanGamesToEndGame = async (file) => {
    const pattern = 'ShutdownGame';
    return file.map(game => {
        const [totalGame] = game.splitWithRegex(pattern, getAllAndIgnoreCaseFlag);
        return totalGame;
    });
};

module.exports = {
    getInitialGameArray,
    cleanGamesToEndGame
};
