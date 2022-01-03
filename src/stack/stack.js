class Stack {
    head = null;
    _size = 0;

    push(item) {
        const node = { item, next: this.head };
        this.head = node;
        this._size++;
    };

    pop() {
        if (this.head === null) {
            throw Error('Empty stack can not pop data');
        };
        const item = this.head.item;
        this.head = this.head.next;
        this._size--;
        return item;
    }

    size() {
        return this._size;
    };
}

module.exports = Stack;