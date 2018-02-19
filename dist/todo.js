var todo;
(function (todo) {
    var APP = /** @class */ (function () {
        function APP(items) {
            this._service = new todo.Service(items);
        }
        APP.prototype.getAll = function () {
            return this._service.getAll();
        };
        APP.prototype.add = function (item) {
            this._service.add(item);
        };
        APP.prototype.toggle = function (id) {
            this._service.toggle(id);
        };
        APP.prototype.remove = function (id) {
            this._service.remove(id);
        };
        return APP;
    }());
    todo.APP = APP;
})(todo || (todo = {}));
var todo;
(function (todo) {
    var Service = /** @class */ (function () {
        function Service(items) {
            var _this = this;
            this.items = [];
            if (items)
                items.forEach(function (v) { return _this.add(v); });
        }
        Service.prototype.getAll = function () {
            return this.items;
        };
        Service.prototype.add = function (content) {
            if (!content)
                throw 'invalid param';
            var item = {
                id: Service._genId(),
                content: content,
                state: false
            };
            this.items.push(item);
        };
        Service.prototype.toggle = function (id) {
            var item = this.items.filter(function (v) { return v.id === id; })[0];
            if (item)
                item.state = !item.state;
            else
                throw 'invalid param';
        };
        Service.prototype.remove = function (id) {
            if (!id)
                throw 'invalid param';
            this.items = this.items.filter(function (v) { return v.id !== id; });
        };
        Service._Id = 0;
        Service._genId = function () { return Service._Id++; };
        return Service;
    }());
    todo.Service = Service;
})(todo || (todo = {}));
//# sourceMappingURL=todo.js.map