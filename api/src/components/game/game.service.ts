import {Injectable} from '@nestjs/common';

@Injectable()
export class GameService {
    async getAll() {
        return []
    }

    async getByGameNumber(gameNumber: number) {
        return [];
    }
}
