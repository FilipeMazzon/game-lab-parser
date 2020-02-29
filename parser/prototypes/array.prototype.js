Array.prototype.splitWithRegex = function (pattern, flags) {
    return this.split(new RegExp(pattern, flags))
};
