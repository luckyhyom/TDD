const Stack = require('../stack.js');

describe('stack', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });

    it('shows array property', () => {
        expect(stack.show()).toEqual([]);
    });

    it('should save datas', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.show()).toStrictEqual([1,2,3,4]);
    });

    describe('pop', () => {
        it('should return and delete its latest data', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            stack.push(4);
            expect(stack.show()).toStrictEqual([1, 2, 3, 4]);

            let popped = stack.pop();
            expect(popped).toBe(4);

            expect(stack.show()).toStrictEqual([1, 2, 3]);
        });
    });
});