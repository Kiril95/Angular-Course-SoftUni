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
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0,
            this.tasks = [];
    }
    Employee.prototype.work = function () {
        var task = this.tasks.shift();
        this.tasks.push(task);
        console.log("".concat(this.name, " is ").concat(task));
    };
    Employee.prototype.collectSalary = function () {
        console.log("".concat(this.name, " received ").concat(this.salary, " this month."));
    };
    return Employee;
}());
function company() {
    var Junior = /** @class */ (function (_super) {
        __extends(Junior, _super);
        function Junior(name, age) {
            var _this = _super.call(this, name, age) || this;
            _this.tasks.push("working on a complicated task.");
            return _this;
        }
        return Junior;
    }(Employee));
    var Senior = /** @class */ (function (_super) {
        __extends(Senior, _super);
        function Senior(name, age) {
            var _this = _super.call(this, name, age) || this;
            _this.tasks.push('is working on a complicated task.');
            _this.tasks.push('is taking time off work.');
            _this.tasks.push('is supervising junior work.');
            return _this;
        }
        return Senior;
    }(Employee));
    var Manager = /** @class */ (function (_super) {
        __extends(Manager, _super);
        function Manager(name, age) {
            var _this = _super.call(this, name, age) || this;
            _this.dividend = 0;
            _this.tasks.push('scheduled a meeting.');
            _this.tasks.push('is preparing a quarterly report.');
            return _this;
        }
        Manager.prototype.getSalary = function () {
            return this.salary + this.dividend;
        };
        return Manager;
    }(Employee));
    return { Junior: Junior, Senior: Senior, Manager: Manager };
}
var people = company();
var junior = new people.Junior('Ivan', 25);
junior.work();
junior.work();
junior.salary = 1200;
junior.collectSalary();
var senior = new people.Senior('Alex', 31);
senior.work();
senior.work();
senior.work();
senior.work();
senior.salary = 12050;
senior.collectSalary();
var manager = new people.Manager('Tom', 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
