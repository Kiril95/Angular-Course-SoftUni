class Box<T> {
    private data;

    constructor() {
        this.data = [];
    }

    public add(element: T) {
        this.data.push(element);
    }

    public remove() {
        this.data.pop();
    }

    get count(): number {
        return this.data.length;
    }
}

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);