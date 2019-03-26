var EventManager = (function () {
    function EventManager() {
        this.eventList = [];
    }
    EventManager.prototype.on = function (eventName, callback) {
        this.eventList.push({ name: eventName, callback: callback });
    };
    EventManager.prototype.emit = function (eventName, params) {
        for (var _i = 0, _a = this.eventList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (eventName === item.name) {
                item.callback(params);
            }
        }
    };
    return EventManager;
}());
var eventBus = new EventManager();
eventBus.on('test', function (data) {
    console.log(data);
});
eventBus.emit('test', '撒娇的给');
//# sourceMappingURL=event.js.map