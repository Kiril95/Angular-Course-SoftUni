class Box {
    constructor() {
        this.data = [];
    }
    add(element) {
        this.data.push(element);
    }
    remove() {
        this.data.pop();
    }
    get count() {
        return this.data.length;
    }
}
let box = new Box();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
//# sourceMappingURL=box.js.map