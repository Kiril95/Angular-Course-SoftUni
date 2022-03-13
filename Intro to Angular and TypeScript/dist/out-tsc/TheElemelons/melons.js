class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    toString() {
        switch (this.constructor.name) {
            case "Watermelon": return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
            case "Firemelon": return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
            case "Earthmelon": return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
            case "Airmelon": return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }
}
class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
        this.element = 'Water';
    }
}
class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
        this.element = 'Fire';
    }
}
class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
        this.element = 'Earth';
    }
}
class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
        this.element = 'Air';
    }
}
class Melolemonmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elements = ['Water', 'Fire', 'Earth', 'Air'];
        this.toString = () => { return `Element: ${this.morph()}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`; };
        this.elementIndex = weight * melonSort.length;
    }
    morph() {
        let currElement = this.elements.shift();
        this.elements.push(currElement);
        return currElement;
    }
}
let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
let melon = new Melolemonmelon(5, "Elf-style");
console.log(melon.toString()); //Water
console.log(melon.toString()); //Fire
console.log(melon.toString()); //Earth
//# sourceMappingURL=melons.js.map