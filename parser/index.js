const FileUtil = require('./utils/file.util');
const ParserHelper = require('./helpers/parser.helper');
const {Game} = require('./game');
const pathFile = process.env.PATH_FILE || './games.log';

(async () => {
    const roughFile = await FileUtil.getRoughFile(pathFile);
    const initialGamesArray = ParserHelper.getInitialGameArray(roughFile);
    const games = ParserHelper.cleanGamesToEndGame(initialGamesArray);
    const game = new Game();
    game.updateScores();
    console.log(game)
})();
