const FileUtil = require('./utils/file.util');
const ParserHelper = require('parser/helpers/parser.helper');

const pathFile = process.env.PATH_FILE || './games.log';

(async () => {
    const roughFile = await FileUtil.getRoughFile(pathFile);
    const initialGamesArray = ParserHelper.getInitialGameArray(roughFile);
    const games = ParserHelper.cleanGamesToEndGame(initialGamesArray);

})();
