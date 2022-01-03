const Stack = require('../stack.js');

describe('stack', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });

    it('return size', () => {
        expect(stack.size()).toBe(0);
    });

    it('should save datas', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.size()).toBe(4);
    });

    describe('pop', () => {
        it('throws error if it is empty', () => {
            expect(() => stack.pop()).toThrow('Empty stack can not pop data');
        });
        it('should return and delete its latest data', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            stack.push(4);
            expect(stack.size()).toStrictEqual(4);

            let popped = stack.pop();
            expect(popped).toBe(4);

            expect(stack.size()).toStrictEqual(3);
        });
    });
});