class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0,
            this.tasks = [];
    }
    work() {
        let task = this.tasks.shift();
        this.tasks.push(task);
        console.log(`${this.name} is ${task}`);
    }
    collectSalary() {
        console.log(`${this.name} received ${this.salary} this month.`);
    }
}
function company() {
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push("working on a complicated task.");
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push('is working on a complicated task.');
            this.tasks.push('is taking time off work.');
            this.tasks.push('is supervising junior work.');
        }
    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push('scheduled a meeting.');
            this.tasks.push('is preparing a quarterly report.');
        }
        getSalary() {
            return this.salary + this.dividend;
        }
    }
    return { Junior, Senior, Manager };
}
const people = company();
const junior = new people.Junior('Ivan', 25);
junior.work();
junior.work();
junior.salary = 1200;
junior.collectSalary();
const senior = new people.Senior('Alex', 31);
senior.work();
senior.work();
senior.work();
senior.work();
senior.salary = 12050;
senior.collectSalary();
const manager = new people.Manager('Tom', 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
//# sourceMappingURL=people.js.map