var Box = /** @class */ (function () {
    function Box() {
        this.data = [];
    }
    Box.prototype.add = function (element) {
        this.data.push(element);
    };
    Box.prototype.remove = function () {
        this.data.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box = new Box();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
