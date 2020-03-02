import {Document} from "mongoose";

export interface IGame extends Document {
    total_kills: number;
    players: string[],
    kills: IGameKill
}

interface IGameKill {
    [propName: string]: number
}
