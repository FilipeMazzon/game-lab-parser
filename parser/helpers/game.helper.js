const castMapToArrayOfObject = (map) => {
    return Array.from(map).map((key, value) => ({
        player: key,
        kills: value
    }))
};

const isSuicide = (playerKiller, playerKilled) => {
    return (playerKiller === playerKilled)
};

module.exports = {
    castMapToArrayOfObject,
    isSuicide
};
