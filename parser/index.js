const FileUtil = require('./utils/file.util');
const ParserHelper = require('./helpers/parser.helper');
const {handleGame} = require("./parser");
const pathFile = process.env.PATH_FILE || './games.log';

(async () => {
    const roughFile = await FileUtil.getRoughFile(pathFile);
    const gamesCycle = ParserHelper.getInitialGameArray(roughFile);
    const games = gamesCycle.map(handleGame);
    console.log(games);
})();
