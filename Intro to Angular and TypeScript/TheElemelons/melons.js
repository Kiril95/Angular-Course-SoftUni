var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    Melon.prototype.toString = function () {
        switch (this.constructor.name) {
            case "Watermelon": return "Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
            case "Firemelon": return "Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
            case "Earthmelon": return "Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
            case "Airmelon": return "Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
        }
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        _this.element = 'Water';
        return _this;
    }
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        _this.element = 'Fire';
        return _this;
    }
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        _this.element = 'Earth';
        return _this;
    }
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        _this.element = 'Air';
        return _this;
    }
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elements = ['Water', 'Fire', 'Earth', 'Air'];
        _this.toString = function () { return "Element: ".concat(_this.morph(), "\nSort: ").concat(_this.melonSort, "\nElement Index: ").concat(_this.elementIndex); };
        _this.elementIndex = weight * melonSort.length;
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        var currElement = this.elements.shift();
        this.elements.push(currElement);
        return currElement;
    };
    return Melolemonmelon;
}(Melon));
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
var melon = new Melolemonmelon(5, "Elf-style");
console.log(melon.toString()); //Water
console.log(melon.toString()); //Fire
console.log(melon.toString()); //Earth
