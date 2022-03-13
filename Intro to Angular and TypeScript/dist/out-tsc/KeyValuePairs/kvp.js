class KeyValuePair {
    setKeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    display() {
        return console.log(`key = ${this.key}, value = ${this.value}`);
    }
}
let kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
kvp.display();
//# sourceMappingURL=kvp.js.map