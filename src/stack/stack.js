class Stack {
    array = [];

    push(data) {
        let index = this.array.length;
        this.array[index] = data;
    };

    pop() {
        let lastIndex = this.array.length - 1;
        let returnValue = this.array[lastIndex];

        let replaced = [];
        for (let i = 0; i < lastIndex; i++) {
            replaced[i] = this.array[i];
        };
        this.array = replaced;
        return returnValue;
    }

    show() {
        return this.array;
    };
}

module.exports = Stack;