import {Controller, Get, Param} from '@nestjs/common';
import {GameService} from "./game.service";

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {
    }

    @Get('/')
    async getAll() {
        return this.gameService.getAll();
    }

    @Get('/:gameNumber')
    async getByGameNumber(@Param('gameNumber') gameNumber: number){
        return this.gameService.getByGameNumber(gameNumber);
    }
}
