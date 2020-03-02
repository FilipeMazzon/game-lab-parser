const WORLD = '<world>';

const castMapToArrayOfObject = (map) => {
    return Array.from(map).map((key, value) => ({
        player: key,
        kills: value
    }))
};

const isNotSuicide = (playerKiller, playerKilled) => {
    return (playerKiller === playerKilled)
};

const wasNotWorldWhoKilled = (playerKiller) => {
    return (playerKiller === WORLD)
}

module.exports = {
    castMapToArrayOfObject,
    isNotSuicide,
    wasNotWorldWhoKilled
};
