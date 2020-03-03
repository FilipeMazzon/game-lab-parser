require('../prototypes/string.prototype');
const getAllAndIgnoreCaseFlag = 'gi';

const getInitialGameArray = (roughFile) => {
    const pattern = 'initGame';
    const initialGame= roughFile.splitWithRegex(pattern, getAllAndIgnoreCaseFlag);
    initialGame.shift();
    return initialGame; //ignore first element because its before the first initial game.
};

const getPlayerWhichEnter = (gameCycle) => {
    return gameCycle.match(RegExp("(?<=(ClientUserinfoChanged:.*n\\\\))([^(\\\\)])*", "g"))
};

const getPlayersKillerAndPlayersKilled = (gameCycle) => {
    const regex = RegExp(".*Kill: \\d+ \\d+ \\d+: ?(.*) killed (.*). ?by", "g");
    let matches;
    const playersKill = [];
    while ((matches = regex.exec(gameCycle))) {
        playersKill.push({playerKiller: matches[1], playerKilled: matches[2]})
    }
    return playersKill;
};

module.exports = {
    getInitialGameArray,
    getPlayerWhichEnter,
    getPlayersKillerAndPlayersKilled
};
