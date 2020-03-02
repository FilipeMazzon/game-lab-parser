import {Schema} from "mongoose";

const GameSchema = new Schema({
    gameNumber: {type: Number},
    players: [{type: String}],
    kills: [{}]
});
