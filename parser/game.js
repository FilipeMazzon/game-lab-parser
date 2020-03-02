const GameHelper = require('./helpers/game.helper');
const INITIAL_KILLS = 0;
const KILL_POINT = 1;
const DEATH_POINT = -1;
const WORLD = '<world>';

//in this moment can't be done private methods in class syntax;
function Game(numberGame) {
    this.score = new Map();
    this.totalKills = INITIAL_KILLS;

    const increaseTotalOfKills = () => {
        this.totalKills++;
    };

    const changeScoreOfPlayer = (player, point) => {
        const scoreValue = this.score.get(player);
        const previousScore = scoreValue ? scoreValue : 0;
        this.score.set(player, previousScore + point);
    };

    const playerKillSomeone = (player) => {
        if (player !== WORLD) {
            changeScoreOfPlayer(player, KILL_POINT)
        }
    };

    const playerWasKilled = (player) => {
        changeScoreOfPlayer(player, DEATH_POINT)
    };

    const playerJoinTheGame = (player) => {
        if (!this.score.has(player)) {
            this.score.set(player, INITIAL_KILLS);
        }
    };

    const updateScores = (playerKiller, playerKilled) => {
        increaseTotalOfKills();
        if (!GameHelper.isSuicide(playerKiller, playerKilled)) {
            playerKillSomeone(playerKiller);
            playerWasKilled(playerKilled);
        }
    };
    const build = () => {
        return {
            number: numberGame,
            totalKills: this.totalKills,
            scores: GameHelper.castMapToArrayOfObject(this.score),
        }
    };
    return {
        playerJoinTheGame,
        updateScores,
        build,
    };
}

module.exports = {Game};
