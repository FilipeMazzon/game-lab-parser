const {Game} = require("./game");
const ParserHelper = require('./helpers/parser.helper');

const handleGame = (gameCycle, gameNumber) => {
    const game = new Game(gameNumber + 1);
    const getJoinEvents = ParserHelper.getPlayerWhichEnter(gameCycle);
    const playersKill = ParserHelper.getPlayersKillerAndPlayersKilled(gameCycle);

    getJoinEvents.forEach(player => game.playerJoinTheGame(player));
    playersKill.forEach(({playerKiller, playerKilled}) => game.kill(playerKiller, playerKilled));

    return game.build();
};

module.exports = {
    handleGame
};
