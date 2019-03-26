var Single = (function () {
    function Single() {
    }
    Single.getIntance = function () {
        if (this.instance === null) {
            return this.instance = new Single();
        }
        return this.instance;
    };
    Single.instance = null;
    return Single;
}());
//# sourceMappingURL=single.js.map